import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const importerNameAndAddressSegment = new EdifactSegment({
  name: 'importer_name_and_address',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.C,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'importer_code',
          tag: '3039',
          status: UseStatus.M,
          _format: 'n..8'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'name_and_address',
      tag: 'C058',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'name_and_address_line',
          tag: '3124',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'party_name',
      tag: 'C080',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'importer_name',
          tag: '3036',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'street',
      tag: 'C059',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'importer_street_name_and_number',
          tag: '3042',
          status: UseStatus.M,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'importer_building_name_and_floor',
          tag: '3042',
          status: UseStatus.C,
          _format: 'an..35',
        }),
        new EdifactElement({
          name: 'importer_suburb',
          tag: '3042',
          status: UseStatus.C,
          _format: 'an..35',
        }),
      ],
    }),
    new EdifactElement({
      name: 'city_name',
      tag: '3164',
      status: UseStatus.C,
      _format: 'an..35'
    }),
    new EdifactElement({
      name: 'country_identification',
      tag: '3229',
      status: UseStatus.C,
      _format: 'an..9',
    }),
    new EdifactElement({
      name: 'postcode_identification',
      tag: '3251',
      status: UseStatus.C,
      _format: 'an..9'
    }),
  ],
});

export const agentNameAndAddressSegment = new EdifactSegment({
  name: 'agent_name_and_address',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'agent_code',
          tag: '3039',
          status: UseStatus.M,
          _format: 'n..8'
        }),
      ]
    }),
  ],
});

export const transporterNameAndAddressSegment = new EdifactSegment({
  name: 'transporter_name_and_address',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'transporter_code',
          tag: '3039',
          status: UseStatus.M,
          _format: 'n..8'
        }),
      ]
    }),
  ],
});

export const supplierNameAndAddressSegment = new EdifactSegment({
  name: 'supplier_name_and_address',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'supplier_code',
          tag: '3039',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'name_and_address',
      tag: 'C058',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'name_and_address_line',
          tag: '3124',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'party_name',
      tag: 'C080',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'supplier_name',
          tag: '3036',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'street',
      tag: 'C059',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'supplier_street_name_and_number',
          tag: '3042',
          status: UseStatus.M,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'supplier_building_name_and_floor',
          tag: '3042',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'supplier_suburb',
          tag: '3042',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactElement({
      name: 'supplier_city_town',
      tag: '3164',
      status: UseStatus.C,
      _format: 'an..35'
    }),
    new EdifactElement({
      name: 'country_identification',
      tag: '3229',
      status: UseStatus.C,
      _format: 'an..9'
    }),
    new EdifactElement({
      name: 'supplier_street_code',
      tag: '3251',
      status: UseStatus.C,
      _format: 'an..9'
    }),
  ],
});

export const messageSenderNameSegment = new EdifactSegment({
  name: 'message_sender_name',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'message_sender',
          tag: '3039',
          status: UseStatus.M,
          _format: 'an..8'
        }),
      ],
    }),
  ],
});

export const ownerNameSegment = new EdifactSegment({
  name: 'owner_name',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.M,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'owner_code',
          tag: '3039',
          status: UseStatus.M,
          _format: 'n..8'
        }),
      ],
    }),
  ],
});

export const unregisteredTraderNameAndAddressSegment = new EdifactSegment({
  name: 'unregistered_trader_name_and_address',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.C,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'unregistered_trader_identification_number',
          tag: '3039',
          status: UseStatus.M,
          _format: 'an..35'
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
      ],
    }),
    new EdifactCompositeElement({
      name: 'name_and_address',
      tag: 'C058',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'name_and_address_line',
          tag: '3124',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'party_name',
      tag: 'C080',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'unregistered_trader_name',
          tag: '3036',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'street',
      tag: 'C059',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'unregistered_trader_street_name_and_number',
          tag: '3042',
          status: UseStatus.M,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'unregistered_trader_building_name_and_floor',
          tag: '3042',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'unregistered_trader_suburb',
          tag: '3042',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ]
    }),
    new EdifactElement({
      name: 'unregistered_trader_city',
      tag: '3164',
      status: UseStatus.C,
      _format: 'an..35'
    }),
    new EdifactElement({
      name: 'country_identification',
      tag: '3229',
      status: UseStatus.C,
      _format: 'an..9'
    }),
    new EdifactElement({
      name: 'unregistered_trader_street_code',
      tag: '3251',
      status: UseStatus.C,
      _format: 'an..9'
    }),
  ],
});

export const vesselsAgentNameSegment = new EdifactSegment({
  name: 'vessel_agent',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'vessel_agent',
          tag: '3039',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ],
    }),
  ]
});

export const masterCargoCarrierNameSegment = new EdifactSegment({
  name: 'master_cargo_carrier',
  tag: 'NAD',
  elements: [
    new EdifactElement({
      name: 'party_qualifier',
      tag: '3035',
      status: UseStatus.C,
      _format: 'an..35',
    }),
    new EdifactCompositeElement({
      name: 'party_identification_details',
      tag: 'C082',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'master_cargo_carrier',
          tag: '3039',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
  ],
});
