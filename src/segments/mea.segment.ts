import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const totalGrossWeightSegment = new EdifactSegment({
  name: 'measurement',
  tag: 'MEA',
  elements: [
    new EdifactElement({
      name: 'measurement_application_qualifier',
      tag: '6311',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'measurement_details',
      tag: 'C503',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'measurement_dimension',
          tag: '6313',
          status: UseStatus.C,
          _format: 'an..3',
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'value_range',
      tag: 'C174',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'measure_unit_qualifier',
          tag: '6411',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'measurement_value',
          tag: '6314',
          status: UseStatus.C,
          _format: 'n..18'
        }),
      ],
    }),
  ],
});

export const specifiedTariffQuantity1Segment = new EdifactSegment({
  name: 'specified_tariff_quantity_1',
  tag: 'MEA',
  elements: [
    new EdifactElement({
      name: 'measurement_application_qualifier',
      tag: '6311',
      status: UseStatus.C,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'measurement_details',
      tag: 'C502',
      status: UseStatus.C,
      elements: [],
    }),
    new EdifactCompositeElement({
      name: 'value_range',
      tag: 'C174',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'measure_unit_qualifier',
          tag: '6411',
          status: UseStatus.M,
          _format: 'an..2',
        }),
        new EdifactElement({
          name: 'measurement_value',
          tag: '6314',
          status: UseStatus.M,
          _format: 'n..11'
        }),
      ]
    }),
  ],
});

export const specifiedTariffQuantity2Segment = new EdifactSegment({
  name: 'specified_tariff_quantity_2',
  tag: 'MEA',
  elements: [
    new EdifactElement({
      name: 'measurement_application_qualifier',
      tag: '6311',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'measurement_details',
      tag: 'C502',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'measurement_dimension',
          tag: '6313',
          status: UseStatus.C,
          _format: 'an..2'
        }),
        new EdifactElement({
          name: 'measurement_significance',
          tag: '6321',
          status: UseStatus.C,
          _format: 'n..11'
        }),
      ],
    }),
  ],
});

export const specifiedTariffQuantity3Segment = new EdifactSegment({
  name: 'specified_tariff_quantity_3',
  tag: 'MEA',
  elements: [
    new EdifactElement({
      name: 'measurement_application_qualifier',
      tag: '6311',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'measurement_details',
      tag: 'C502',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'measurement_dimension',
          tag: '6313',
          status: UseStatus.C,
          _format: 'an..2'
        }),
        new EdifactElement({
          name: 'measurement_significance',
          tag: '6321',
          status: UseStatus.C,
          _format: 'n..11'
        }),
      ],
    }),
  ],
});

export const customsLineItemMeasurementSegment = new EdifactSegment({
  name: 'customs_line_item_measurement',
  tag: 'MEA',
  elements: [
    new EdifactElement({
      name: 'measurement_application_qualifier',
      tag: '6311',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'measurement_details',
      tag: 'C502',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'measurement_dimension',
          tag: '6313',
          status: UseStatus.C,
          _format: 'an..2'
        }),
        new EdifactElement({
          name: 'measurement_significance',
          tag: '6312',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});

export const warehouseKeeperSegment = new EdifactSegment({
  name: 'party_qualifier',
  tag: '3035',
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
          name: 'party_id_identification',
          tag: '3039',
          status: UseStatus.M,
          _format: 'n..8'
        }),
      ],
    }),
  ],
});
