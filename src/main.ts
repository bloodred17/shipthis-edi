import { validate } from 'class-validator';
import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from './edi-serializer';

const syntaxIdentifierCompositeElement = new EdifactCompositeElement({
  name: 'syntax_identifier',
  tag: 'S001',
  status: UseStatus.M,
  elements: [
    {
      tag: '0001',
      status: UseStatus.M,
      format: 'a..4',
      name: 'syntax_identifier'
    },
    {
      name: 'syntax_version_number',
      tag: '0002',
      status: UseStatus.M,
      format: 'an..1',
    }
  ]
});

const segment = new EdifactSegment({
  name: 'interchange_header',
  tag: 'UNB',
  elements: [
    syntaxIdentifierCompositeElement
  ]
});

const renderSegment = (segment: EdifactSegment, data: any) => {
  let result = '';
  for (const element of segment.elements) {
    result += '+';
    if (element instanceof EdifactCompositeElement) {
      for (const [i, dataElement] of Object.entries(element.elements)) {
        result += ((+i > 0) ? ':' : '') + data[dataElement.name]
      }
    }
    if (element instanceof EdifactElement) {
      result += data[element.name]
    }
  }

  console.log(data);
  return `${segment.tag}${result}'`
}


(async () => {
  const errors = await validate(segment);
  console.log(errors);
  // console.log(segment)

  const data = {
    syntax_identifier: 'UNOB',
    syntax_version_number: '4'
  }

  console.log(renderSegment(segment, data));
})()
