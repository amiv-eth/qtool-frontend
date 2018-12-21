var m = require('mithril');

var Categories = {
    list: [],
    loadList: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/utility/category',
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            Categories.list = result.items
        })
    }
}

module.exports = Categories;