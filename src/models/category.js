var m = require('mithril');
var api = require('./api_config');

var Category = {
    items: [],
    fetch: function () {
        return m.request({
            method: 'GET', 
            url: api.address() + '/utility/category',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Category.items = result.items;
        })
    }
}

module.exports = Category;