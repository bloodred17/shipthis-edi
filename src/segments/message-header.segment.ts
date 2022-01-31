import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const messageHeaderSegment = new EdifactSegment({
  name: 'message_header',
  tag: 'UNH',
  elements: [
    new EdifactElement({
      name: 'message_reference_number',
      tag: '0062',
      status: UseStatus.M,
      _format: 'an..14'
    }),
    new EdifactCompositeElement({
      name: 'message_identifier',
      tag: 'S009',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'message_type_identifier',
          tag: '0065',
          status: UseStatus.M,
          _format: 'an..6'
        }),
        new EdifactElement({
          name: 'message_type_version_number',
          tag: '0052',
          status: UseStatus.M,
          _format: 'an..3',
        }),
        new EdifactElement({
          name: 'message_type_release_number',
          tag: '0054',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'controlling_agency',
          tag: '0051',
          status: UseStatus.M,
          _format: 'an..2'
        }),
        new EdifactElement({
          name: 'association_assigned_code',
          tag: '0057',
          status: UseStatus.C,
          _format: 'an..6'
        }),
      ]
    }),
  ]
});
