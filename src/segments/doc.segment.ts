import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const commercialInvoiceSegment = new EdifactSegment({
  name: 'commercial_invoice',
  tag: 'DOC',
  elements: [
    new EdifactCompositeElement({
      name: 'document_message_name',
      tag: 'C002',
      status: UseStatus.M,
      elements: [
        new EdifactElement({
          name: 'document_message_name_coded',
          tag: '1001',
          status: UseStatus.C,
          _format: 'an..3'
        }),
      ],
    }),
    new EdifactCompositeElement({
      name: 'document_message_details',
      tag: 'C503',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'document_message_number',
          tag: '1004',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ],
    }),
  ],
});
