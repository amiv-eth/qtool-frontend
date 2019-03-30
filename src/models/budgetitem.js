var m = require('mithril');

var BudgetItem = {
    items: [],
    pageContent: {},
    meta: {},
    page: 1,
    fetchPage: function () {
        return m.request({
            method: 'GET', 
            url: 'http://127.0.0.1:5000/Budget/item?sort=budgetitem_code.asc&page=' + BudgetItem.page,
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Accept': 'application/json'
            }
        })
        .then(function (result) {
            BudgetItem.pageContent[result.meta.page] = result.items;
            BudgetItem.meta = result.meta;
        })
    },
    fetch: function() {
        BudgetItem.fetchPage().then( function(){
            var requests = []
            for (BudgetItem.page = 2; BudgetItem.page <= BudgetItem.meta.last_page; BudgetItem.page++) {
                requests.push(BudgetItem.fetchPage())
            }
            Promise.all(requests).then( function(){
                for (var i = 1; i <= BudgetItem.meta.last_page; i++) {
                    BudgetItem.items = BudgetItem.items.concat(BudgetItem.pageContent[i])
                }
            })
        })
    }
}

module.exports = BudgetItem;