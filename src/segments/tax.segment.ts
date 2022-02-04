import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const taxDetailsSegment = new EdifactSegment({
  name: 'tax_details',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'tax_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'tax_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'tax_type_code',
          tag: '5135',
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

export const importAndExportTaxSegment = new EdifactSegment({
  name: 'import_export_tax_segment',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'tax_fee_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'tax_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'tax_type_code',
          tag: '5153',
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

export const taxExportsFeeDetailsSegment = new EdifactSegment({
  name: 'tax_exports_details',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'tax_function_qualifier',
      tag: '5283',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'tax_fee',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'tax_fee_code',
          tag: '5153',
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

export const cifcValueTaxSegment = new EdifactSegment({
  name: 'cifc_tax_details',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'tax_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'tax_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'tax_type_code',
          tag: '5153',
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

export const transactionFeeDetailsSegment = new EdifactSegment({
  name: 'transaction_fee_details',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'fee_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'fee_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'fee_type_code',
          tag: '5153',
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
          tag: '5152',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});

export const totalDutiesDueFeeSegment = new EdifactSegment({
  name: 'total_duties_due_fee',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'fee_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'fee_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'fee_type_code',
          tag: '5153',
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

export const totalDutiesDueAmountSegment = new EdifactSegment({
  name: 'total_duties_due_amount',
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

export const totalVatDueFeeSegment = new EdifactSegment({
  name: 'total_vat_due',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'fee_function_qualifier',
      tag: '5283',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'fee_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'fee_type_code',
          tag: '5153',
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

export const overpaidExciseAccountFeeSegment = new EdifactSegment({
  name: 'fee_function_qualifier',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'fee_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'fee_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'fee_type_code',
          tag: '5153',
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

export const underpaidExciseAccountFeeSegment = new EdifactSegment({
  name: 'underpaid_excise_account_fee',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'fee_function_qualifier',
      tag: '5283',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'fee_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'fee_type_code',
          tag: '5153',
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

export const customsDutyFeeSegment = new EdifactSegment({
  name: 'customs_duty',
  tag: 'TAX',
  elements: [
    new EdifactElement({
      name: 'duty_qualifier',
      tag: '5283',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'duty_type',
      tag: 'C241',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'duty_type_code',
          tag: '5153',
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
        })
      ],
    }),
  ],
});
