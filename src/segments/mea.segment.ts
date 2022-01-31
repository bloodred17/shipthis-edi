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
