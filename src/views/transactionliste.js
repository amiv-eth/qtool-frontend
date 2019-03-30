var m = require('mithril');

var Transaction = require('../models/transaction');

var TransactionListe = {
    view: function() {
        return m('div', [
            tableNavigation(),
            table(),

        ])
    }
}

function previousPage(){
    Transaction.page--
    Transaction.fetch()
}

function nextPage(){
    Transaction.page++
    Transaction.fetch()
}

function searchString(string){
    if (string.length < 3){
        if(Transaction.where == ''){ return }
        else{
            Transaction.where = ''
            Transaction.fetch()
            return
        }
    }
    fields = ['financial_year', 'date', 'description', 'amount', 'amount_in_chf', 'comment']
    let search = '{\'or\': ['
    for (let idx in fields){
        search = search + '{\'' + fields[idx] + '.in\': \'' + string + '\'}, '
    }
    search = search + ']}'
    Transaction.where = search
    Transaction.fetch()
}

function tableNavigation(){
    searchForm = m('form',
        m('input.form-control[type=text]', {
            placeholder: "Suche",
            oninput: m.withAttr('value', function(value) { searchString(value) }),
        }),
    )
    searchNav = m('div', {style: {width: '67%', display: 'inline-block'}}, searchForm)
    let navigation = [];
    if (Transaction.page > 1){
        navigation.push(m('button.btn.btn-outline-secondary', {onclick: previousPage, style: {width: '100px'}}, 'Page ' + (Transaction.page-1)))
    } else {
        navigation.push(m('button.btn.btn-outline-secondary.disabled', {style: {width: '100px'}},'Page ' + (Transaction.page-1)))
    }
    if (Transaction.page < Transaction.meta.last_page){
        navigation.push(m('button.btn.btn-outline-secondary', {onclick: nextPage, style: {width: '100px'}}, 'Page ' + (Transaction.page+1)))
    } else {
        navigation.push(m('button.btn.btn-outline-secondary.disabled', {style: {width: '100px'}}, 'Page ' + (Transaction.page+1)))
    }
    pageNav = m('div', {align: 'right', style: {width: '33%', display: 'inline-block'}}, navigation)
    return m('div',  [searchNav, pageNav])
}

function table(){
    return m('table', {
        oninit: Transaction.fetch,
        onclick: function(e) {
            var prop = e.target.getAttribute("data-sort-by")
            if (prop == null){
                return
            }
            if (Transaction.sort == prop+'.asc'){
                Transaction.sort = prop+'.desc';
            } else {
                Transaction.sort = prop+'.asc';
            }
            Transaction.page = 1;
            Transaction.fetch();
            TransactionListe.view()
        }
    }, [
        m('tr', [
            m('th[data-sort-by=id]', 'ID'),
            m('th[data-sort-by=description]', 'Beschreibung'),
            m('th[data-sort-by=type_id]', 'Type'),
            m('th[data-sort-by=category_id]', 'Category'),
            m('th[data-sort-by=budgetitem_id]', 'Budgetposten'),
            m('th[data-sort-by=account_id]', 'Konto'),
            m('th[data-sort-by=currency_id]', 'Währung'),
            m('th[data-sort-by=amount]', 'Betrag'),
            m('th[data-sort-by=amount_in_chf]', 'Betrag CHF'),
            m('th[data-sort-by=is_valid]', 'Valid'),
            m('th[data-sort-by=financial_year]', 'Geschäftsjahr'),
            m('th[data-sort-by=date]', 'Date')
        ]),
        Transaction.items.map(function (transaction) {
            var id = transaction.id;
            return m('tr', [
                m('td', {value: id}, m(`a[href=/belegformular/${id}]`, {oncreate: m.route.link}, id)),
                m('td', transaction.description),
                m('td', transaction.type_id),
                m('td', transaction.category_id),
                m('td', transaction.budgetitem_id),
                m('td', transaction.account_id),
                m('td', transaction.currency_id),
                m('td', transaction.amount),
                m('td', transaction.amount_in_chf),
                m('td', transaction.is_valid),
                m('td', transaction.financial_year),
                m('td', transaction.date)
            ])
        }),
    ])
}

module.exports = TransactionListe