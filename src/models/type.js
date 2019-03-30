var m = require('mithril');

var Type = {
    items: [],
    fetch: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/utility/type',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Type.items = result.items
        })
    }
}

module.exports = Type;