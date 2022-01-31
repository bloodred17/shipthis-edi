import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const containerInformationSegment = new EdifactSegment({
  name: 'container_information',
  tag: 'EQD',
  elements: [
    new EdifactElement({
      name: 'equipment_qualifier',
      tag: '8053',
      status: UseStatus.M,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'equipment_identification',
      tag: 'C237',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'equipment_identification_number',
          tag: '8260',
          status: UseStatus.C,
          _format: 'an..17'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'equipment_size_and_type',
      tag: 'C224',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'equipment_size_and_type_identification',
          tag: '8155',
          status: UseStatus.C,
          _format: 'an..10'
        }),
        new EdifactElement({
          name: 'code_list_qualifier',
          tag: '1131',
          status: UseStatus.C,
          _format: 'an..3',
        }),
        new EdifactElement({
          name: 'code_list_responsible_agency',
          tag: '3055',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'equipment_size_and_type',
          tag: '8155',
          status: UseStatus.C,
          _format: 'an..30',
        }),
      ],
    }),
    new EdifactElement({
      name: 'equipment_supplier',
      tag: '8077',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactElement({
      name: 'equipment_status',
      tag: '8249',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactElement({
      name: 'full_empty_indicator',
      tag: '8169',
      status: UseStatus.C,
      _format: 'an..3'
    }),
  ],
});
