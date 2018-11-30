var m = require('mithril');

var user = require('../models/user');

module.exports = {
    oninit: user.loadList,
    view: function() {
        return m('user-list', user.list.map(function(user) {
            return m('a.user-list-item', 
                {href: '/edit/' + user.id, oncreate:m.route.link}, 
                user.firstName + ' ' + user.lastName
            ) 
        }))
    }
}