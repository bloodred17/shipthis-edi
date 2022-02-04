import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const invoiceItemAmountSegment = new EdifactSegment({
  name: 'invoice_item_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount_type_qualifier',
      tag: '5025',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5025',
          status: UseStatus.C,
          _format: 'n..12'
        }),
      ],
    }),
  ],
});

export const customsValueAmountSegment = new EdifactSegment({
  name: 'customs_value_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12'
        }),
      ],
    }),
  ],
});

export const taxImportsAmountSegment = new EdifactSegment({
  name: 'tax_imports_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12'
        }),
      ],
    }),
  ],
});

export const taxImportsExportsAmountSegment = new EdifactSegment({
  name: 'tax_imports_exports_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.C,
          _format: 'an..3',
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12'
        }),
      ],
    }),
  ],
});

export const taxExportAmountSegment = new EdifactSegment({
  name: 'tax_export_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12',
        }),
      ],
    }),
  ],
});

export const cifcValueAmountSegment = new EdifactSegment({
  name: 'cifc_value_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12'
        }),
      ],
    }),
  ],
});

export const transactionAmountSegment = new EdifactSegment({
  name: 'transaction_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12'
        }),
        new EdifactElement({
          name: 'currency_code',
          tag: '6345',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});

export const overpaidExciseAccountAmountSegment = new EdifactSegment({
  name: 'overpaid_excise_account_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});

export const underpaidExciseAccountAmountSegment = new EdifactSegment({
  name: 'underpaid_excise_account_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'n..12'
        }),
      ],
    }),
  ],
});

export const customsDutyAmountSegment = new EdifactSegment({
  name: 'customs_duty_amount',
  tag: 'MOA',
  elements: [
    new EdifactCompositeElement({
      name: 'monetary_amount',
      tag: 'C516',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'monetary_amount_type',
          tag: '5025',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'monetary_amount',
          tag: '5004',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});
