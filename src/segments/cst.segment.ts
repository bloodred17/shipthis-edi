import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const customsStatusOfGoodsSegment = new EdifactSegment({
  name: 'customs_status_of_goods',
  tag: 'CST',
  elements: [
    new EdifactElement({
      name: 'goods_items_number',
      tag: '1496',
      status: UseStatus.C,
      _format: 'n..5',
    }),
    new EdifactCompositeElement({
      name: 'customs_identity_codes',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'customs_code_identification',
          tag: '7361',
          status: UseStatus.M,
          _format: 'an..3',
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
      ],
    }),
  ],
});

export const customsStatusOfGoods2Segment = new EdifactSegment({
  name: 'customs_status_of_goods_2',
  tag: 'CST',
  elements: [
    new EdifactElement({
      name: 'line_number',
      tag: '1496',
      status: UseStatus.C,
      _format: 'n..4'
    }),
    new EdifactCompositeElement({
      name: 'customs_identity_codes',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'tariff_code',
          tag: '7361',
          status: UseStatus.M,
          _format: 'n..9'
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
    new EdifactCompositeElement({
      name: 'customs_identity_codes_1',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'preference_code',
          tag: '7361',
          status: UseStatus.M,
          _format: 'an..18'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'customs_identity_codes_2',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'trade_agreement',
          tag: '7361',
          status: UseStatus.M,
          _format: 'an..11'
        }),
      ]
    }),
  ],
});

export const customStatusOfGoods3Segment = new EdifactSegment({
  name: 'custom_status_of_goods',
  tag: 'CST',
  elements: [
    new EdifactElement({
      name: 'line_number',
      tag: '1496',
      status: UseStatus.C,
      _format: 'n..4'
    }),
    new EdifactCompositeElement({
      name: 'customs_identity_codes',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'tariff_code',
          tag: '7361',
          status: UseStatus.C,
          format: 'an..3'
        }),
        new EdifactElement({
          name: 'tariff_schedule',
          tag: '1131',
          status: UseStatus.C,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'mutually_defined',
          tag: '3055',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ]
    }),
    new EdifactCompositeElement({
      name: 'customs_identity_codes_1',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'preference_code',
          tag: '7361',
          status: UseStatus.M,
          _format: 'an..3'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'customs_identity_codes_2',
      tag: 'C246',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'trade_agreement',
          tag: '7361',
          status: UseStatus.M,
          _format: 'an..11'
        }),
      ],
    }),
  ],
});
