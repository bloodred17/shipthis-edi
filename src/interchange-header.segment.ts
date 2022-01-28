import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from './edi-serializer';

export const interchangeHeaderSegment = new EdifactSegment({
  name: 'interchange_header',
  tag: 'UNB',
  elements: [
    new EdifactCompositeElement({
      name: 'syntax_identifier',
      tag: 'S001',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'syntax_identifier',
          tag: '0001',
          status: UseStatus.M,
          _format: 'a..4',
        }),
        new EdifactElement({
          name: 'syntax_version_number',
          tag: '0002',
          status: UseStatus.M,
          _format: 'an..1',
        }),
      ]
    }),
    new EdifactCompositeElement({
      name: 'interchange_sender',
      tag: 'S002',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'interchange_sender_identification',
          tag: '0004',
          status: UseStatus.M,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'interchange_code_qualifier',
          tag: '0007',
          status: UseStatus.C,
          _format: 'an..4'
        }),
        new EdifactElement({
          name: 'interchange_sender_internal_identification',
          tag: '0008',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'interchange_sender_internal_sub_identification',
          tag: '0042',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ]
    }),
  ]
});
