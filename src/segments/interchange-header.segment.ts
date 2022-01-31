import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

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
    new EdifactCompositeElement({
      name: 'interchange_recipient',
      tag: 'S003',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'interchange_recipient_identification',
          tag: '0010',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ]
    }),
    new EdifactCompositeElement({
      name: 'datetime_of_preparation',
      tag: 'S004',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'date_of_preparation',
          tag: '0017',
          status: UseStatus.M,
          _format: 'n..8'
        }),
        new EdifactElement({
          name: 'time_of_preparation',
          tag: '0019',
          status: UseStatus.M,
          _format: 'n..4'
        }),
      ]
    }),
    new EdifactElement({
      name: 'interchange_control_reference',
      tag: '0020',
      status: UseStatus.M,
      _format: 'an..14'
    }),
    new EdifactCompositeElement({
      name: 'recipient_reference_password',
      tag: 'S005',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'recipient_reference_password',
          tag: '0022',
          status: UseStatus.M,
          _format: 'an..14'
        })
      ]
    }),
    new EdifactElement({
      name: 'application_reference',
      tag: '0026',
      status: UseStatus.C,
      _format: 'an..14'
    }),
    new EdifactElement({
      name: 'processing_priority_code',
      tag: '0029',
      status: UseStatus.C,
      _format: 'a..1',
    }),
    new EdifactElement({
      name: 'acknowledgement_request',
      tag: '0031',
      status: UseStatus.C,
      _format: 'n..1'
    }),
    new EdifactElement({
      name: 'interchange_agreement_identifier',
      tag: '0032',
      status: UseStatus.C,
      _format: 'an..35',
    }),
    new EdifactElement({
      name: 'test_indicator',
      tag: '0035',
      status: UseStatus.C,
      _format: 'n..1'
    })
  ]
});
