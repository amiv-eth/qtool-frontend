var m = require('mithril');

var userList = require('./views/userList');
var userForm = require('./views/userForm');
var layout = require('./views/layout');

m.route(document.body, '/list', {
    '/list': {
        render: function() {
            return m(layout, m(userList))
        }
    },
    '/edit/:id': {
        render: function(vnode) {
            return m(layout, m(userForm, vnode.attrs))
        }
    }
});

