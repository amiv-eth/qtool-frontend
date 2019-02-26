var m = require('mithril');

var Account = {
    items: [],
    fetch: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/utility/account',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Account.items = result.items
        })
    }
}

module.exports = Account;