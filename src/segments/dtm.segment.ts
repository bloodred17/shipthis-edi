import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../edi-serializer';

export const presentationDateOfGoodsDeclarationSegment = new EdifactSegment({
  name: 'presentation_data_of_goods_declaration',
  tag: 'DTM',
  elements: [
    new EdifactCompositeElement({
      name: 'date_time_period',
      tag: 'C507',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'date_time_period_qualifier',
          tag: '2005',
          status: UseStatus.M,
          _format: 'an..3',
        }),
        new EdifactElement({
          name: 'date_time_period',
          tag: '2380',
          status: UseStatus.C,
          _format: 'n..8'
        }),
        new EdifactElement({
          name: 'date_time_period_format_qualifier',
          tag: '2379',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
  ],
});

export const estimatedDateOfArrivalSegment = presentationDateOfGoodsDeclarationSegment;

export const actualArrivalDateSegment = presentationDateOfGoodsDeclarationSegment;

export const houseWaybillDateSegment = presentationDateOfGoodsDeclarationSegment;

export const transportDocumentDateSegment = presentationDateOfGoodsDeclarationSegment;
