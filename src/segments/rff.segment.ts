import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const houseBillOfLadingNumberSegment = new EdifactSegment({
  name: 'reference_qualifier',
  tag: 'RFF',
  elements: [
    new EdifactCompositeElement({
      name: 'reference',
      tag: 'C506',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'reference_qualifier',
          tag: '1153',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'reference_number',
          tag: '1154',
          status: UseStatus.C,
          _format: 'an..35',
        }),
      ]
    }),
  ],
});

export const originalMrnSegment = houseBillOfLadingNumberSegment;

export const previousProcedureMrnSegment = houseBillOfLadingNumberSegment;

export const transportDocumentNumberSegment = houseBillOfLadingNumberSegment;

export const deferredPaymentReferenceSegment = houseBillOfLadingNumberSegment;

export const uniqueConsignmentNumberSegment = houseBillOfLadingNumberSegment;
