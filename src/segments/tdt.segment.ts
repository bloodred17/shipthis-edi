import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const detailsOfTransportSegment = new EdifactSegment({
  name: 'details_of_transport',
  tag: 'TDT',
  elements: [
    new EdifactElement({
      name: 'transport_stage_qualifier',
      tag: '8051',
      status: UseStatus.M,
      _format: 'an..3',
    }),
    new EdifactElement({
      name: 'conveyance_reference_number',
      tag: '8028',
      status: UseStatus.C,
      _format: 'an..17',
    }),
    new EdifactCompositeElement({
      name: 'mode_of_transport',
      tag: 'C220',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'mode_of_transport_coded',
          tag: '8067',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'mode_of_transport',
          tag: '8066',
          status: UseStatus.C,
          _format: 'an..17'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'transport_means',
      tag: 'C228',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'type_of_means_of_transport_identification',
          tag: '8179',
          status: UseStatus.C,
          _format: 'an..8'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'carrier',
      tag: 'C040',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'carrier_identification',
          tag: '3127',
          status: UseStatus.C,
          _format: 'an..17'
        }),
      ]
    }),
    new EdifactCompositeElement({
      name: 'excess_transportation_information',
      tag: 'C401',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'excess_transportation_reason',
          tag: '8457',
          status: UseStatus.M,
          _format: 'an..3'
        }),
      ]
    }),
    new EdifactCompositeElement({
      name: 'transport_identification',
      tag: 'C222',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'id_means_of_transport',
          tag: '8213',
          status: UseStatus.C,
          _format: 'an..9'
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
          name: 'id_of_the_means_of_transport',
          tag: '8212',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ]
    }),
  ],
});
