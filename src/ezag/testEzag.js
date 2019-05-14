import m from 'mithril';
import { Button } from 'polythene-mithril';
import generateInvoice from '../models/pdf_invoice';

export default class TestEzag {
  constructor() {
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
