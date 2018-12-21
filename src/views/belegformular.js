var m = require('mithril');

var Transaction = require('../models/transaction')
var Categories = require('../models/categories')
var Account = require('../models/account')
var TransactionType = require('../models/transaction_type')
var Currency = require('../models/currency')

module.exports = {
    view: function() {
        return m('form.col-md-8.col-md-offset-2', {
            onsubmit: function(e) {
                e.preventDefault()
                Transaction.submit()
            }
        }, [
            m('div.alert', 'Bitte für jede Quittung ein Belegformular ausfüllen!'),
            m('label.control-label', 'Beschreibung'),
            m('input.form-control[type=text]', {
                oninput: m.withAttr('value', function(value) { Transaction.description = value }),
                value: Transaction.description
            }),
            m('label.control-label', 'Kategorie'),
            m('select.form-control', {
                oninit: Categories.loadList,
                onchange: m.withAttr('value', function(value) { Transaction.category_id = value }),
            },
                Categories.list.map(function (category) {
                    return m('option', {value: category['category']}, category['category_name'])
                })
            ),
            m('label.control-label', 'Budgetposten'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) { Transaction.budgetitem_id = value
            })}, [
                    m('option', {value: 0}, ''),
                    m('option', {value: 1}, 'Merchandising'),
                    m('option', {value: 2}, 'Infrastruktur Aufenthaltsraum'),
                ]
            ),
            m('label.control-label', 'Zahlungsart'),
            m('select.form-control', {
                oninit: TransactionType.loadList,
                onchange: m.withAttr('value', function(value) { Transaction.type_id = value }),
            },
                TransactionType.list.map(function (transaction_type) {
                    return m('option', {value: transaction_type['type_id']}, transaction_type['type_name'])
                })
            ),
            m('label.control-label', 'Konto'),
            m('select.form-control', {
                oninit: Account.loadList,
                onchange: m.withAttr('value', function(value) { Transaction.account_id = value }),
            },
                Account.list.map(function (account) {
                    return m('option', {value: account['account']}, account['account_name'])
                })
            ),
            m('label.control-label', 'Betrag'),
            m('select.form-control', {
                oninit: Currency.loadList,
                onchange: m.withAttr('value', function(value) { Transaction.currency_id = value }),
            },
                Currency.list.map(function (currency) {
                    return m('option', {value: currency['currency_id']}, currency['currency_shortcut'])
                })
            ),
            m('input.form-control[type=number]', {
                oninput: m.withAttr('value', function(value) { Transaction.amount = value }),
                value: Transaction.amount
            }),
            m('label.control-label', 'Kommentare'),
            m('input.form-control[type=text]', {
                oninput: m.withAttr('value', function(value) { Transaction.comment = value }),
                value: Transaction.comment
            }),
            m('button.button[type=submit]', 'Submit')
        ])
    }
}