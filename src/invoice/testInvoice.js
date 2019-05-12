import m from 'mithril';
import { Button } from 'polythene-mithril';
import generateInvoice from '../models/pdf_invoice';

export default class TestInvoice {
  /**
   * Home-Page of Website
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */

  constructor() {
    this.inv_data = {
      customer: {
        first_name: 'Katarina',
        plz: '5400',
        email: 'katarina.isailovic@ch.abb.com',
        country: 'Schweiz',
        company: 'ABB Schweiz AG',
        title: 'ms',
        quotation: 'Netto',
        city: 'Baden',
        last_name: 'Isailovic',
        address: 'Brown Boveri Strasse 6',
        category: 'Unternehmen',
      },
      user: {
        name: 'Luzian Bieri',
        role: 'Quästor - AMIV an der ETH',
        amiv_mail: 'luzibier@amiv.ch',
      },
      items: [
        {
          unit: 'Stk',
          amount: 371,
          unitprice: 1.1,
          article_type: 'Weiterverrechnung ohne Gewinn',
          taxrate: 0,
          invoice_id: '1',
          description: 'Bier für Automaten',
        },
        {
          unit: 'kg',
          amount: 1.5,
          unitprice: 25,
          article_type: 'Kafferechnung',
          taxrate: 0.077,
          description: 'Kaffee aus Schweden',
        },
      ],
      nr: 'R19-test',
      issue_date: '2017-02-27',
      duedate: '2017-03-29',
    };
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
            generateInvoice(this.inv_data, 'de');
          },
        },
      }),
    ]);
  }
}
