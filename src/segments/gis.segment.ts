import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const customsValuationMethodSegment = new EdifactSegment({
  name: 'customs_valuation_method',
  tag: 'GIS',
  elements: [
    new EdifactCompositeElement({
      name: 'processing_indicator',
      tag: 'C529',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'processing_indicator_coded',
          tag: '7365',
          status: UseStatus.M,
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

export const dutyTaxSegment = new EdifactSegment({
  name: 'duty_tax',
  tag: 'GIS',
  elements: [
    new EdifactCompositeElement({
      name: 'processing_indicator',
      tag: 'C529',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'processing_indicator_coded',
          tag: '7365',
          status: UseStatus.M,
          _format: 'an..1'
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

export const refundAcknowledgementIndicator = dutyTaxSegment;
