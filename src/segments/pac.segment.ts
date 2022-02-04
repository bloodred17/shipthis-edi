import { EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const numberOfPackagesSegment = new EdifactSegment({
  name: 'number_of_packages',
  tag: 'PAC',
  elements: [
    new EdifactElement({
      name: 'number_of_packages',
      tag: '7224',
      status: UseStatus.C,
      _format: 'n..8'
    })
  ]
});
