var m = require('mithril');
var api = require('./api_config');

var Type = {
    items: [],
    fetch: function () {
        return m.request({
            method: 'GET', 
            url: api.address() + '/utility/type',
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