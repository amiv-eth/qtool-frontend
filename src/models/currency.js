var m = require('mithril');

var Currency = {
    items: [],
    fetch: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/utility/currency',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Currency.items = result.items
        })
    }
}

module.exports = Currency;