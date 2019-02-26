var m = require('mithril');

var Transaction = {
    items: [],

    fetch: function() {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/Transaction/transaction',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Transaction.items = result.items
        })
    },

    fetchId: function(id) {
        return m.request({
            method: 'GET', 
            url: `http://127.0.0.1:5000/Transaction/transaction/${id}`,
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            return result
        })
    },

    submit: function(data) {
        return m.request({
            method: 'POST',
            url: 'http://127.0.0.1:5000/Transaction/',
            data: data,
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

module.exports = Transaction;