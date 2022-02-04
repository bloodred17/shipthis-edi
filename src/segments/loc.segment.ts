import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const locationOfGoodsSegment = new EdifactSegment({
  name: 'location_of_goods',
  tag: 'LOC',
  elements: [
    new EdifactElement({
      name: 'place_location_qualifier',
      tag: '3227',
      status: UseStatus.M,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'location_identification',
      tag: 'C517',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'place_location_identifier',
          tag: '3225',
          status: UseStatus.C,
          _format: 'an..2'
        }),
        new EdifactElement({
          name: 'code_list_qualifier',
          tag: '1131',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'code_list_responsible_agency_coded',
          tag: '3055',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'place_location',
          tag: '3224',
          status: UseStatus.C,
          _format: 'an..70'
        }),
      ],
    }),
  ],
});

export const warehouseSegment = new EdifactSegment({
  name: 'warehouse',
  tag: 'LOC',
  elements: [
    new EdifactElement({
      name: 'place_location_qualifier',
      tag: '3227',
      status: UseStatus.M,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'location_identification',
      tag: 'C517',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'place_location_identification',
          tag: '3225',
          status: UseStatus.C,
          _format: 'an..11'
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
  ],
});

export const customsOfficeOfDestinationSegment = new EdifactSegment({
  name: 'customs_office_of_destination',
  tag: 'LOC',
  elements: [
    new EdifactElement({
      name: 'place_location_qualifier',
      tag: '3227',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'location_identification',
      tag: 'C517',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'place_location_identification',
          tag: '3225',
          status: UseStatus.C,
          _format: 'an..25',
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
  ],
});

export const customsOfficeOfDestinationTransitSegment = new EdifactSegment({
  name: 'customs_office_of_destination_transit',
  tag: 'LOC',
  elements: [
    new EdifactElement({
      name: 'place_location_qualifier',
      tag: '3227',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'location_identification',
      tag: 'C517',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'place_location_identification',
          tag: '3225',
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
      ],
    }),
  ],
});

export const countryOfExplorationDespatchSegment = customsOfficeOfDestinationTransitSegment;

export const placeOfLodgementOfDocumentsSegment = customsOfficeOfDestinationTransitSegment;

export const placePortOfLoadingSegment = new EdifactSegment({
  name: 'place_port_of_loading',
  tag: 'LOC',
  elements: [
    new EdifactElement({
      name: 'place_location_qualifier',
      tag: '3227',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'location_identification',
      tag: 'C517',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'place_location_identification',
          tag: '3225',
          status: UseStatus.C,
          _format: 'an..5'
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
  ],
});

export const countryOfOriginSegment = new EdifactSegment({
  name: 'country_of_origin',
  tag: 'LOC',
  elements: [
    new EdifactElement({
      name: 'location_qualifier',
      tag: '3227',
      status: UseStatus.M,
      _format: 'an..33'
    }),
    new EdifactCompositeElement({
      name: 'location_qualifier',
      tag: 'C517',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'location_identification',
          tag: '3225',
          status: UseStatus.C,
          _format: 'an..25',
        }),
      ],
    }),
  ],
});
