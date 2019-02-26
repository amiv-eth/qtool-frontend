var m = require('mithril');

var Category = {
    items: [],
    fetch: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/utility/category',
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