var m = require('mithril');

var Transaction = require('../models/transaction');
var Category = require('../models/category');
var Account = require('../models/account');
var Type = require('../models/type');
var Currency = require('../models/currency');
var BudgetItem = require('../models/budgetitem');


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
        comment: '',
        amount_in_chf: 0
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
            dropDownMenu(Category,'category_id', 'category', ['category_name']),
            m('label.control-label', 'Budgetposten'),
            dropDownMenu(BudgetItem, 'budgetitem_id', 'budgetitem_id', ['budgetitem_code', 'budgetitem_name']),
            m('label.control-label', 'Zahlungsart'),
            dropDownMenu(Type, 'type_id', 'type_id', ['type_name']),
            m('label.control-label', 'Konto'),
            dropDownMenu(Account, 'account_id', 'account', ['account_name']),
            m('label.control-label', 'Betrag'),
            dropDownMenu(Currency, 'currency_id', 'currency_id', ['currency_shortcut']),
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


function dropDownMenu(Endpoint, belegformularAttrName, valueKey, textKeys){
    return m('select.form-control', {
            oninit: Endpoint.fetch,
            onchange: m.withAttr('value', function(value) { Belegformular.data[belegformularAttrName] = value }),
        },
        populateDropDown(Endpoint, belegformularAttrName, valueKey, textKeys)
    );
}

function populateDropDown(Endpoint, belegformularAttrName, valueKey, textKeys){
    if (Endpoint.items.length == 0){
        return
    }
    const firstItem = Endpoint.items[0];
    const firstValue = firstItem[valueKey];
    Belegformular.data[belegformularAttrName] = firstItem[valueKey];
    return Endpoint.items.map(function(item){
        var text = '';
        for (let idx in textKeys){
            text = text + item[textKeys[idx]] + ' ';
        }
        if (item[valueKey] == firstValue){
            return m('option', {selected: "selected", value: item[valueKey]}, text);
        } else {
            return m('option', {value: item[valueKey]}, text);
        }
    })
}

module.exports = Belegformular