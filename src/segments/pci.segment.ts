import { EdifactCompositeElement, EdifactElement, EdifactSegment, UseStatus } from '../serializer';

export const marksAndNumbersSegment = new EdifactSegment({
  name: 'marks_and_number',
  tag: 'PCI',
  elements: [
    new EdifactElement({
      name: 'marking_instructions',
      tag: '4233',
      status: UseStatus.C,
      _format: 'an..3',
    }),
    new EdifactCompositeElement({
      name: 'marks_and_labels',
      tag: 'C210',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'mn_1',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_2',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_3',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_4',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_5',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_6',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_7',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_8',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_9',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
        new EdifactElement({
          name: 'mn_10',
          tag: '7120',
          status: UseStatus.C,
          _format: 'an..35'
        }),
      ],
    }),
    new EdifactElement({
      name: 'container_package_status',
      tag: '8275',
      status: UseStatus.C,
      _format: 'an..3'
    }),
    new EdifactCompositeElement({
      name: 'type_of_marking',
      tag: 'C827',
      status: UseStatus.C,
      elements: [
        new EdifactElement({
          name: 'type_of_marking_coded',
          tag: '7511',
          status: UseStatus.M,
          _format: 'an..3'
        }),
        new EdifactElement({
          name: 'code_list_qualifier',
          tag: '1131',
          status: UseStatus.C,
          _format: 'an..3',
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
