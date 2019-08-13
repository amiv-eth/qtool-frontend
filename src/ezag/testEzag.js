import m from 'mithril';
import { Button } from 'polythene-mithril';
import generateEZAG from '../models/ezag_file';
import { log } from '../utils';

export default class TestEzag {
  constructor() {
    log.debug(`Constructing new TestEzag`);

    this.ezag_data = {};
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
            generateEZAG(this.ezag_data);
          },
        },
      }),
    ]);
  }
}
