import m from 'mithril';
import { Button } from 'polythene-mithril';
import generateInvoice from '../models/pdf_invoice';
import { log } from '../utils';

export default class TestEzag {
  constructor() {
    log.debug(`Constructing new TestEzag`);

    this.ezag_data = {};
  }

  view() {
    return m('div', [
      m('h1', 'Test the generation of invoices here'),
      m(Button, {
        className: 'blue-button',
        border: true,
        label: 'PDF',
        events: {
          onclick: () => {
            generateInvoice(this.inv_data, 'en');
          },
        },
      }),
    ]);
  }
}
