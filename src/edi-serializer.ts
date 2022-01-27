import {
  IsEnum,
  IsNotEmpty,
  IsString, Validate, ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export class Composite {
  data: string[];
}

export enum UseStatus {
  M = 'mandatory',
  C = 'conditional'
}
export type ElementValueType = 'a' | 'n' | 'an';
export type LengthType = 'fixed' | 'variable';
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
  // for async validations you must return a Promise<boolean> here
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
    return 'Incorrect format';
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

  @IsString()
  @Validate(Format)
  format: string;

  constructor(init?: Partial<EdifactElement>) {
    if (init) {
      Object.assign(this, init);
    }
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
