import m from 'mithril';
import Transaction from '../models/transaction';

export default class TransactionListe {
  constructor() {
    this.transaction = new Transaction();
  }

  previousPage() {
    this.transaction.page -= 1;
    this.transaction.fetch();
  }

  nextPage() {
    this.transaction.page += 1;
    this.transaction.fetch();
  }

  searchString(string) {
    if (string.length < 3) {
      if (this.transaction.where === '') {
        return;
      }
      this.transaction.where = '';
      this.transaction.page = 1;
      this.transaction.fetch();
      return;
    }
    const fields = ['financial_year', 'date', 'description', 'amount', 'amount_in_chf', 'comment'];
    let search = "{'or': [";
    Object.values(fields).forEach(field => {
      search = `${search}{'${field}.in': '${string}'}, `;
    });
    search += ']}';
    this.transaction.page = 1;
    this.transaction.where = search;
    this.transaction.fetch();
  }

  tableNavigation() {
    const searchForm = m(
      'form',
      m('input.form-control[type=text]', {
        placeholder: 'Suche',
        oninput: m.withAttr('value', value => {
          this.searchString(value);
        }),
      })
    );
    const searchNav = m('div', { style: { width: '67%', display: 'inline-block' } }, searchForm);
    const navigation = [];
    if (this.transaction.page > 1) {
      navigation.push(
        m(
          'button.btn.btn-outline-secondary',
          { onclick: this.previousPage, style: { width: '100px' } },
          `Page ${this.transaction.page - 1}`
        )
      );
    } else {
      navigation.push(
        m(
          'button.btn.btn-outline-secondary.disabled',
          { style: { width: '100px' } },
          `Page ${this.transaction.page - 1}`
        )
      );
    }
    if (this.transaction.page < this.transaction.meta.last_page) {
      navigation.push(
        m(
          'button.btn.btn-outline-secondary',
          { onclick: this.nextPage, style: { width: '100px' } },
          `Page ${this.transaction.page + 1}`
        )
      );
    } else {
      navigation.push(
        m(
          'button.btn.btn-outline-secondary.disabled',
          { style: { width: '100px' } },
          `Page ${this.transaction.page + 1}`
        )
      );
    }
    const pageNav = m(
      'div',
      { align: 'right', style: { width: '33%', display: 'inline-block' } },
      navigation
    );
    return m('div', [searchNav, pageNav]);
  }

  table() {
    return m(
      'table.table.table-striped.table-responsive',
      {
        oninit: this.transaction.fetch(),
        onclick(e) {
          const prop = e.target.getAttribute('data-sort-by');
          if (prop == null) {
            return;
          }
          console.log(prop);
          if (this.transaction.sort === `${prop}.asc`) {
            this.transaction.sort = `${prop}.desc`;
          } else {
            this.transaction.sort = `${prop}.asc`;
          }
          this.transaction.page = 1;
          this.transaction.fetch();
        },
      },
      [
        m(
          'thead',
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
          ])
        ),
        m(
          'tbody',
          this.transaction.items.map(transaction => {
            const { id } = transaction;
            return m('tr', [
              m(
                'th',
                { value: id, scope: 'row' },
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
          })
        ),
      ]
    );
  }

  view() {
    return m('div', [this.tableNavigation(), this.table()]);
  }
}
