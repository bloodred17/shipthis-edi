import {
  IsEnum, IsIn,
  IsNotEmpty, IsNumber, IsOptional,
  IsString, Length, Validate, ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';


export enum UseStatus {
  M = 'mandatory',
  C = 'conditional'
}
const elementValueTypes = ['a', 'n', 'an'];
export type ElementValueType = typeof elementValueTypes[number];
// export type ElementValueType = 'a' | 'n' | 'an';

const lengthTypes = ['fixed', 'variable'];
export type LengthType = typeof lengthTypes[number];
// export type LengthType = 'fixed' | 'variable';

export interface Pattern {
  name: string,
  regex: RegExp,
}
export const patterns: Pattern[] = [
  { name: 'a_fixed', regex: /(^a+[0-9]+)/ },
  { name: 'an_fixed', regex: /(^an+[0-9]+)/ },
  { name: 'n_fixed', regex: /(^n+[0-9]+)/ },
  { name: 'a_variable', regex: /(^a\.\.+[0-9]+)/ },
  { name: 'an_variable', regex: /(^an\.\.+[0-9]+)/ },
  { name: 'n_variable', regex: /(^n\.\.+[0-9]+)/ },
];

export function getElementFormat(str: string): {
  valueType: ElementValueType,
  lengthType: LengthType,
  length: number,
} {
  const digitIndex = str.search(/([0-9]+)/);
  if (!digitIndex) {
    throw new Error('No length found')
  }
  const filtered = patterns.filter((pattern: Pattern) => {
    return pattern?.regex.test(str);
  });
  if (filtered.length === 0 || filtered.length > 1) {
    throw new Error('Invalid format')
  }
  const pattern = filtered[0];
  const split = pattern?.name?.split('_');
  return {
    valueType: split[0] as ElementValueType,
    lengthType: split[split.length - 1] as LengthType,
    length: +str.substring(digitIndex)
  };
}

@ValidatorConstraint({ name: 'format', async: false })
export class Format implements ValidatorConstraintInterface {
  validate(text: string) {
    try {
      const {valueType, lengthType, length} = getElementFormat(text);
      return ['a', 'an', 'n'].includes(valueType) &&
        ['fixed', 'variable'].includes(lengthType) && !isNaN(length);
    } catch (e) {
      return false;
    }
  }

  defaultMessage() {
    return `Incorrect format`;
  }
}

export class EdifactElement {
  @IsNotEmpty()
  @IsString()
  tag: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(UseStatus)
  status: UseStatus;

  @IsOptional()
  @IsString()
  @Validate(Format)
  format?: string;

  @IsOptional()
  @IsString()
  @Length(1,2)
  @IsIn(elementValueTypes)
  valueType?: ElementValueType;

  @IsOptional()
  @IsString()
  @IsIn(lengthTypes)
  lengthType?: LengthType;

  @IsOptional()
  @IsNumber()
  maxLength?: number;

  constructor(init?: Partial<EdifactElement>) {
    if (init) {
      Object.assign(this, init);
    }
  }

  set _format(value: string) {
    this.format = value;
    const { valueType, lengthType, length } = getElementFormat(value);
    this.valueType = valueType;
    this.lengthType = lengthType;
    this.maxLength = length;
  }
}

export class EdifactCompositeElement {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  tag: string;

  @IsEnum(UseStatus)
  status: UseStatus;

  @ValidateNested()
  elements: EdifactElement[];

  constructor(init?: Partial<EdifactCompositeElement>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}

export class EdifactSegment {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  tag: string;

  @ValidateNested()
  elements: (EdifactElement | EdifactCompositeElement)[];

  constructor(init?: Partial<EdifactSegment>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}

export function validateValue(element: EdifactElement, value: string): boolean {
  // console.log(element, value)
  const { valueType, lengthType, maxLength, name } = element;
  let condition: boolean;

  if (!lengthType) {
    throw new Error(`lengthType of ${element.name} cannot be ${lengthType}`);
  }
  switch (lengthType) {
    case 'fixed':
      condition = value.length === maxLength;
      if (!condition) throw new Error(`Length of ${name} should be equal to ${maxLength}`);
      break;

    case 'variable':
      condition = value.length <= maxLength;
      if (!condition) throw new Error(`Length of ${name} should be less than or equal to ${maxLength}`);
      break;
  }

  if (!valueType) {
    throw new Error(`valueType of ${element.name} cannot be ${valueType}`);
  }
  if (value) {
    switch (valueType) {
      case 'a':
        condition = /^[a-zA-Z]+$/.test(value);
        if (!condition) throw new Error(`${name} should be alphabetic`);
        break;

      case 'n':
        condition = /^[0-9]+$/.test(value);
        if (!condition) throw new Error(`${name} should be numeric`);
        break;

      case 'an':
        condition = /^[a-zA-Z0-9]+$/.test(value);
        if (!condition) throw new Error(`${name} should be alpha numeric`);
        break;
    }
  }

  return condition;
}
