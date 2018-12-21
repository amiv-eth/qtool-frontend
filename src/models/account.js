var m = require('mithril');

var Account = {
    list: [],
    loadList: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/utility/account',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Account.list = result.items
        })
    }
}

module.exports = Account;