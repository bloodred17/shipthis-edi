import { validate } from 'class-validator';
import { EdifactCompositeElement, EdifactElement, EdifactSegment, validateValue } from './edi-serializer';
import { interchangeHeaderSegment } from './interchange-header.segment';


// const edifactData = [];
// for (const element of segment.elements) {
//   if (element instanceof EdifactCompositeElement) {
//     for (const dataElement of element.elements) {
//       edifactData.push(dataElement.name);
//     }
//   }
//   if (element instanceof EdifactElement) {
//     edifactData.push(element.name);
//   }
// }
// export type EdifactData = typeof edifactData[number];


const renderSegment = (segment: EdifactSegment, data) => {
  let result = '';
  for (const element of segment.elements) {
    result += '+';
    if (element instanceof EdifactCompositeElement) {
      for (const [i, dataElement] of Object.entries(element.elements)) {
        const value = data[dataElement.name];
        if (value === null || value === undefined) {
          throw new Error(`${dataElement.name} can not be ${value}`)
        }
        const condition = validateValue(dataElement, value);
        if (!condition) {
          throw new Error(`${dataElement.name} cannot be ${condition}`)
        }
        console.log(dataElement.name, condition)
        if (condition) {
          result += ((+i > 0) ? ':' : '') + value;
        }
      }
    }
    if (element instanceof EdifactElement) {
      result += data[element.name]
    }
  }
  return `${segment.tag}${result}'`
}


(async () => {
  const errors = await validate(interchangeHeaderSegment);
  console.log(errors);
  // console.log(segment)

  const data = {
    syntax_identifier: 'UNOB',
    syntax_version_number: '4',
    interchange_sender_identification: '12345678ABC',
    interchange_code_qualifier: '',
    interchange_sender_internal_identification: 'ABCDEFGHIJKLMNOP',
    interchange_sender_internal_sub_identification: 'SPCAS2'
  }

  console.log(renderSegment(interchangeHeaderSegment, data));
})()
