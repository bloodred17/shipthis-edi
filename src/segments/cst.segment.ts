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
