import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const lineItemSegment = new EdifactSegment({
  name: 'line_item',
  tag: 'FTX',
  elements: [
    new EdifactElement({
      name: 'text_subject_qualifier',
      tag: '4451',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactElement({
      name: 'text_function',
      tag: '4453',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'text_reference',
      tag: 'C107',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'free_text_identification',
          tag: '4441',
          status: UseStatus.M,
          _format: 'an..17'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'text_literal',
      tag: 'C108',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'total_lines',
          tag: '4440',
          status: UseStatus.M,
          _format: 'n..4'
        }),
        new EdifactElement({
          name: 'credit_terms',
          tag: '4440',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'vat_indicator',
          tag: '4440',
          status: UseStatus.C,
          _format: 'an..1'
        }),
        new EdifactElement({
          name: 'transaction_bank_code',
          tag: '4440',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'change_acknowledgement_indicator',
          tag: '4440',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});

const goods = [
  new EdifactElement({
    name: 'description_of_goods_1',
    tag: '4440',
    status: UseStatus.C,
    _format: 'an..70'
  }),
  new EdifactElement({
    name: 'description_of_goods_2',
    tag: '4440',
    status: UseStatus.C,
    _format: 'an..70'
  }),
  new EdifactElement({
    name: 'description_of_goods_3',
    tag: '4440',
    status: UseStatus.C,
    _format: 'an..70'
  }),
  new EdifactElement({
    name: 'description_of_goods_4',
    tag: '4440',
    status: UseStatus.C,
    _format: 'an..70'
  }),
  new EdifactElement({
    name: 'description_of_goods_5',
    tag: '4440',
    status: UseStatus.C,
    _format: 'an..70'
  }),
];

// Doubt: segments not used in definition but present in output
export const goodsDescriptionSegment = new EdifactSegment({
  name: 'goods_description',
  tag: 'FTX',
  elements: [
    new EdifactElement({
      name: 'text_subject_qualifier',
      tag: '4451',
      status: UseStatus.M,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'text_literal',
      tag: 'C108',
      status: UseStatus.C,
      elements: goods,
    }),
  ],
});

export const additionalInformationSg30Segment = new EdifactSegment({
  name: 'additional_information_sg30',
  tag: 'FTX',
  elements: [
    new EdifactElement({
      name: 'text_subject_qualifier',
      tag: '4451',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactElement({
      name: 'text_function',
      tag: '4453',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'text_reference',
      tag: 'C107',
      status: UseStatus.C,
      elements: [],
    }),
    new EdifactCompositeElement({
      name: 'text_literal',
      tag: 'C108',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'additional_information_code',
          tag: '4440',
          status: UseStatus.M,
          _format: 'an..35'
        }),
      ],
    }),
  ],
});

export const customsClearanceInstructionsSegment = new EdifactSegment({
  name: 'customs_clearance_instructions',
  tag: 'FTX',
  elements: [
    new EdifactElement({
      name: 'text_subject_qualifier',
      tag: '4451',
      status: UseStatus.M,
      _format: 'an..3'
    }),
    new EdifactElement({
      name: 'text_function',
      tag: '4453',
      status: UseStatus.C,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'text_reference',
      tag: 'C107',
      status: UseStatus.C,
      elements: [],
    }),
    new EdifactCompositeElement({
      name: 'text_literal',
      tag: 'C108',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'requested_procedure',
          tag: '4440',
          status: UseStatus.M,
          _format: 'n..2',
        }),
        new EdifactElement({
          name: 'previous_procedure',
          tag: '4440',
          status: UseStatus.C,
          _format: 'n..11',
        }),
        new EdifactElement({
          name: 'procedure_measure',
          tag: '4440',
          status: UseStatus.C,
          _format: 'n..11'
        }),
        new EdifactElement({
          name: 'free_text',
          tag: '4440',
          status: UseStatus.C,
          _format: 'an..3',
        }),
        new EdifactElement({
          name: 'to_be_coded',
          tag: '4440',
          status: UseStatus.C,
          _format: 'n..1'
        }),
      ],
    }),
  ],
});
