import { EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const interchangeTrailerSegment = new EdifactSegment({
  name: 'interchange_trailer',
  tag: 'UNZ',
  elements: [
    new EdifactElement({
      name: 'interchange_control_count',
      tag: '0036',
      status: UseStatus.M,
      _format: 'n..6'
    }),
    new EdifactElement({
      name: 'interchange_control_reference',
      tag: '0020',
      status: UseStatus.M,
      _format: 'an..14'
    }),
  ],
});
