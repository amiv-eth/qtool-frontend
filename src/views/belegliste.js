var m = require('mithril');

var Transaction = require('../models/transaction');

var Belegliste = {
    view: function() {
        return m('ul', {
            oninit: Transaction.fetch
        }, 
        Transaction.items.map(function (transaction) {
                var id = transaction['id'];
                return m('li', {value: id}, m(`a[href=/belegformular/${id}]`, {oncreate: m.route.link}, id));
            })
        )
    }
}

module.exports = Belegliste