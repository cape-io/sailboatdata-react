export default {
  db: {
    view: {
      columns: {
        basic: [
          'name', 'displacement', 'ballast',
          'loa', 'lwl', 'beam', 'sailArea',
          'lb', 'dispLen', 'sailDisp', 'csf', 'cr',
        ],
      },
      styles: [
        { value: 'list', label: 'List' },
        { value: 'grid', label: 'Grid' },
        { value: 'film', label: 'Vertical' },
      ],
      prefix: {
        category: [ 'list', 'category' ],
        pgIndex: [ 'list', 'pgIndex' ],
        pgSize: [ 'list', 'pgSize' ],
        sortBy: [ 'list', 'sortBy' ],
        text: [ 'list', 'text' ],
        display: [ 'list', 'display' ],
      },
    },
    schema: {
      id: {
        label: 'ID',
        title: 'Class Id',
      },
      name: {
        label: 'Class',
      },
      ballast: {
        label: 'Ballast',
      },
      csf: {
        label: 'CSR',
        title: 'Capsize Screening Ratio',
      },
      cr: {
        label: 'Comfort',
        title: 'Comfort Ratio',
      },
      displacement: {
        label: 'Disp.',
        title: 'Displacement',
      },
      dispLen: {
        label: 'D/L',
        title: 'Displacement length ratio',
      },
      loa: {
        label: 'LOA',
        title: 'Length Overall',
      },
      lwl: {
        label: 'DWL',
        title: 'Designed Waterline',
      },
      beam: {
        label: 'Beam',
        title: 'Max Beam',
      },
      lb: {
        label: 'L/B',
      },
      sailArea: {
        label: 'Sail Area',
      },
      sailDisp: {
        label: 'SA/D',
        title: 'Sail Area to Displacement Ratio',
      },
    },
  },
  graph: {
    entity: {
      user0: {
        id: 'user0',
        type: 'Person', // ???
        name: 'Anonymous Person or User of the website',
      },
    },
  },
}
