import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

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
