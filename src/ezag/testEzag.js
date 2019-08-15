import m from 'mithril';
import { Button } from 'polythene-mithril';
import generateEZAG from '../models/ezag_file';
import { log } from '../utils';

export default class TestEzag {
  constructor() {
    log.debug(`Constructing new TestEzag`);

    this.ezag_data = [
      {
        name: 'Mavi Polatoglu',
        amount: '184.90',
        code: 'B-309K-190626-232617',
        iban: 'CH7100700110006863150',
        bic: 'ZKBKCHZZ80A',
        currency: 'CHF',
      },
      {
        name: 'Lioba Heimbach',
        amount: '14.30',
        code: 'B-114A-190728-231548',
        iban: 'CH830021421410656640R',
        bic: 'UBSWCHZH88A',
        currency: 'CHF',
      },
      {
        name: 'Lioba Heimbach',
        amount: '14.90',
        code: 'B-114A-190728-231633',
        iban: 'CH830021421410656640R',
        bic: 'UBSWCHZH88A',
        currency: 'CHF',
      },
    ];
  }

  view() {
    return m('div', [
      m('h1', 'Test the generation of EZAGS here'),
      m(Button, {
        className: 'blue-button',
        border: true,
        label: 'PDF',
        events: {
          onclick: () => {
            generateEZAG('190805', this.ezag_data);
          },
        },
      }),
    ]);
  }
}
