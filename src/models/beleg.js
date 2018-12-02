var m = require('mithril');

var beleg = {
    financial_year: 2018,
    date: new Date(),
    type_id: 0,
    description: '',
    category_id: 0,
    budgetitem_id: '',
    account_id: 0,
    is_valid: true,
    amount: 0,
    currency_id: 0,
    user_id: 50,  
    comment: '',  

    submit: function() {
        return m.request({
            method: 'POST',
            url: 'http://127.0.0.1/Transaction/',
            data: beleg,
            headers: {
                'X-AMIV-API-TOKEN': 'quaestor',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

module.exports = beleg;

