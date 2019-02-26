var m = require('mithril');

var Transaction = require('../models/transaction');
var Category = require('../models/category');
var Account = require('../models/account');
var Type = require('../models/type');
var Currency = require('../models/currency');

var Belegformular = {
    data: {
        financial_year: 2018,
        date: new Date(),
        type_id: 0,
        description: '',
        category_id: 0,
        budgetitem_id: 0,
        account_id: 0,
        is_valid: true,
        amount: 0,
        currency_id: 0,
        user_id: 50,  
        comment: ''
    },
    view: function(vnode) {
        return m('form.col-md-8.col-md-offset-2', {
            oninit: function() {
                if(vnode.attrs.id) {
                    Transaction.fetchId(vnode.attrs.id)
                    .then(function(result) {
                        Belegformular.data = result;
                    })
                }
            },
            onsubmit: function(e) {
                e.preventDefault()
                Transaction.submit(Belegformular.data)
            }
        }, [
            m('div.alert', 'Bitte für jede Quittung ein Belegformular ausfüllen!'),
            m('label.control-label', 'Beschreibung'),
            m('input.form-control[type=text]', {
                oninput: m.withAttr('value', function(value) { Belegformular.data.description = value }),
                value: Belegformular.data.description
            }),
            m('label.control-label', 'Kategorie'),
            m('select.form-control', {
                oninit: Category.fetch,
                onchange: m.withAttr('value', function(value) { Belegformular.data.category_id = value }),
            },
                Category.items.map(function (category) {
                    return m('option', {value: category['category']}, category['category_name'])
                })
            ),
            m('label.control-label', 'Budgetposten'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) { Belegformular.data.budgetitem_id = value})
            }, [
                    m('option', {value: 0}, ''),
                    m('option', {value: 1}, 'Merchandising'),
                    m('option', {value: 2}, 'Infrastruktur Aufenthaltsraum'),
                ]
            ),
            m('label.control-label', 'Zahlungsart'),
            m('select.form-control', {
                oninit: Type.fetch,
                onchange: m.withAttr('value', function(value) { Belegformular.data.type_id = value }),
            },
                Type.items.map(function (transaction_type) {
                    return m('option', {value: transaction_type['type_id']}, transaction_type['type_name'])
                })
            ),
            m('label.control-label', 'Konto'),
            m('select.form-control', {
                oninit: Account.fetch,
                onchange: m.withAttr('value', function(value) { Belegformular.data.account_id = value }),
            },
                Account.items.map(function (account) {
                    return m('option', {value: account['account']}, account['account_name'])
                })
            ),
            m('label.control-label', 'Betrag'),
            m('select.form-control', {
                oninit: Currency.fetch,
                onchange: m.withAttr('value', function(value) { Belegformular.data.currency_id = value }),
            },
                Currency.items.map(function (currency) {
                    return m('option', {value: currency['currency_id']}, currency['currency_shortcut'])
                })
            ),
            m('input.form-control[type=number]', {
                oninput: m.withAttr('value', function(value) { Belegformular.data.amount = value }),
                value: Belegformular.data.amount
            }),
            m('label.control-label', 'Kommentare'),
            m('input.form-control[type=text]', {
                oninput: m.withAttr('value', function(value) { Belegformular.data.comment = value }),
                value: Belegformular.data.comment
            }),
            m('button.button[type=submit]', 'Submit')
        ])
    }
}

module.exports = Belegformular