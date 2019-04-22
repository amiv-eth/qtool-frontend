import m from 'mithril';
import Transaction from '../models/transaction';

export default class Belegliste {
  static view() {
    return m(
      'table',
      {
        oninit: Transaction.fetch,
        onclick(e) {
          const prop = e.target.getAttribute('data-sort-by');
          if (prop) {
            const list = Transaction.items;
            const first = list[0];
            // list.sort((a, b) => (a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0));
            list.sort((a, b) => {
              if (a[prop] > b[prop]) {
                return 1;
              }
              if (a[prop] < b[prop]) {
                return -1;
              }
              return 0;
            });
            if (first === list[0]) list.reverse();
          }
        },
      },
      [
        m('tr', [
          m('th[data-sort-by=id]', 'ID'),
          m('th[data-sort-by=description]', 'Beschreibung'),
          m('th[data-sort-by=type_id]', 'Type'),
          m('th[data-sort-by=category_id]', 'Category'),
          m('th[data-sort-by=budgetitem_id]', 'Budgetposten'),
          m('th[data-sort-by=account_id]', 'Konto'),
          m('th[data-sort-by=currency_id]', 'Währung'),
          m('th[data-sort-by=amount]', 'Betrag'),
          m('th[data-sort-by=amount_in_chf]', 'Betrag CHF'),
          m('th[data-sort-by=is_valid]', 'Valid'),
          m('th[data-sort-by=financial_year]', 'Geschäftsjahr'),
          m('th[data-sort-by=date]', 'Date'),
        ]),
        Transaction.items.map(transaction => {
          const { id } = transaction;
          return m('tr', [
            m(
              'td',
              { value: id },
              m(`a[href=/belegformular/${id}]`, { oncreate: m.route.link }, id)
            ),
            m('td', transaction.description),
            m('td', transaction.type_id),
            m('td', transaction.category_id),
            m('td', transaction.budgetitem_id),
            m('td', transaction.account_id),
            m('td', transaction.currency_id),
            m('td', transaction.amount),
            m('td', transaction.amount_in_chf),
            m('td', transaction.is_valid),
            m('td', transaction.financial_year),
            m('td', transaction.date),
          ]);
        }),
      ]
    );
  }
}
