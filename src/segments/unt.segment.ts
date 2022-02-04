import { EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const messageTrailerSegment = new EdifactSegment({
  name: 'message_trailer',
  tag: 'UNT',
  elements: [
    new EdifactElement({
      name: 'segments',
      tag: '0074',
      status: UseStatus.M,
      _format: 'n..6'
    }),
    new EdifactElement({
      name: 'reference_number',
      tag: '00622',
      status: UseStatus.M,
      _format: 'an..14'
    }),
  ],
});
