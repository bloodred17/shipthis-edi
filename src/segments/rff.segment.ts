import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';


const standardRffElements = [
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
];

export const houseBillOfLadingNumberSegment = new EdifactSegment({
  name: 'reference_qualifier',
  tag: 'RFF',
  elements: standardRffElements,
});

export const originalMrnSegment = new EdifactSegment({
  name: 'original_mrn',
  tag: 'RFF',
  elements: standardRffElements,
});

export const previousProcedureMrnSegment = new EdifactSegment({
  name: 'previous_procedure_mrn',
  tag: 'RFF',
  elements: standardRffElements,
});

export const transportDocumentNumberSegment = new EdifactSegment({
  name: 'transport_document_number',
  tag: 'RFF',
  elements: standardRffElements,
});

export const deferredPaymentReferenceSegment = new EdifactSegment({
  name: 'deferred_payment_reference',
  tag: 'RFF',
  elements: standardRffElements,
});

export const uniqueConsignmentNumberSegment = new EdifactSegment({
  name: 'unique_consignment_number',
  tag: 'RFF',
  elements: standardRffElements,
});

export const additionalReferenceNumberSegment = new EdifactSegment({
  name: 'additional_reference_number',
  tag: 'RFF',
  elements: standardRffElements,
});

export const enquiryNumberSegment = new EdifactSegment({
  name: 'enquiry_number',
  tag: 'RFF',
  elements: standardRffElements,
});

export const importerReferenceSegment = new EdifactSegment({
  name: 'importer_reference',
  tag: 'RFF',
  elements: standardRffElements,
});

export const exporterReferenceSegment = new EdifactSegment({
  name: 'reference_qualifier',
  tag: 'RFF',
  elements: [
    new EdifactCompositeElement({
      name: 'exporter_reference',
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
          _format: 'an..10',
        }),
      ]
    }),
  ],
});

export const warehouseEntryNumberSegment = new EdifactSegment({
  name: 'warehouse_entry_number',
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
          _format: 'an..3',
        }),
        new EdifactElement({
          name: 'reference_number',
          tag: '1154',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'line_number',
          tag: '1156',
          status: UseStatus.C,
          _format: 'n..4'
        }),
      ],
    }),
  ],
});
