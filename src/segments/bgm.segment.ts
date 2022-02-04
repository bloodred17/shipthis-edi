import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const beginningOfMessageSegment = new EdifactSegment({
  name: 'beginning_of_message',
  tag: 'BGM',
  counter: '0020',
  number: 3,
  level: 0,
  elements: [
    new EdifactCompositeElement({
      name: 'document_message_name',
      tag: 'C002',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'document_message_name_coded',
          tag: '1001',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'code_list_qualifier',
          tag: '1131',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'code_list_responsible_agency',
          tag: '3055',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'document_message_name',
          tag: '1000',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'document_message_identification',
      tag: 'C106',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'document_message_number',
          tag: '1004',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'version',
          tag: '1056',
          status: UseStatus.C,
          _format: 'an..9'
        }),
        new EdifactElement({
          name: 'revision_number',
          tag: '1060',
          status: UseStatus.C,
          _format: 'an..6',
        }),
      ]
    }),
    new EdifactElement({
      name: 'message_function_coded',
      tag: '1225',
      status: UseStatus.C,
      _format: 'an..3'
    }),
  ],
});
