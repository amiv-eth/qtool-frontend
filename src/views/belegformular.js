var m = require('mithril');

var beleg = require('../models/beleg')

module.exports = {
    view: function() {
        return m('form.col-md-8.col-md-offset-2', {
            onsubmit: function(e) {
                e.preventDefault()
                beleg.submit()
            }
        }, [
            m('div.alert', 'Bitte für jede Quittung ein Belegformular ausfüllen!'),
            m('label.control-label', 'Beschreibung'),
            m('input.form-control[type=text]', {
                oninput: m.withAttr('value', function(value) {
                    beleg.description = value
                }),
                value: beleg.description
            }),
            m('label.control-label', 'Kategorie'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) {
                    beleg.category_id = value
                })}, [
                    m('option', {value: 4100}, 'Allgemeiner Materialeinkauf'),
                    m('option', {value: 4101}, 'Eintritte, Bilette'),
                ]
            ),
            m('label.control-label', 'Budgetposten'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) {
                    beleg.budgetitem_id = value
                })}, [
                    m('option', {value: '107A'}, 'Merchandising'),
                    m('option', {value: '106A'}, 'Infrastruktur Aufenthaltsraum'),
                ]
            ),
            m('label.control-label', 'Zahlungsart'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) {
                    beleg.type = value
                })}, [
                    m('option', {value: 101}, 'Einzahlung Hauptkasse'),
                    m('option', {value: 203}, 'Rückerstattung'),
                ]
            ),
            m('label.control-label', 'Konto'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) {
                    beleg.account_id = value
                })}, [
                    m('option', {value: 1000}, 'Hauptkasse'),
                    m('option', {value: 1010}, 'Postkonto'),
                ]
            ),
            m('label.control-label', 'Betrag'),
            m('select.form-control', {
                onchange: m.withAttr('value', function(value) {
                    beleg.currency_id = value
                })}, [
                    m('option', {value: 1}, 'CHF'),
                    m('option', {value: 2}, 'EUR'),
                    m('option', {value: 3}, 'USD'),
                ]
            ),
            m('input.form-control[type=number]', {
                oninput: m.withAttr('value', function(value) {
                    beleg.amount = value
                }),
                value: beleg.amount
            }),
            m('label.control-label', 'Kommentare'),
            m('input.form-control[type=text]', {
                oninput: m.withAttr('value', function(value) {
                    beleg.comment = value
                }),
                value: beleg.comment
            }),
            m('button.button[type=submit]', 'Submit')
        ])
    }
}