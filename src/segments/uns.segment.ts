import { EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const sectionControlSegment = new EdifactSegment({
  name: 'section_control',
  tag: 'UNS',
  elements: [
    new EdifactElement({
      name: 'section_identification',
      tag: '0081',
      status: UseStatus.M,
      _format: 'a1'
    }),
  ],
});
