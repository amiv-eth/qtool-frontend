var m = require('mithril');

var Menu = {
    view: function() {
        return m('nav.navbar', 
            m('ul.navbar-nav.mr-auto', [
            m('li.nav-item', m('a[href=/].nav-link', {oncreate: m.route.link}, 'Home')),
            m('li.nav-item', m('a[href=/belegformular].nav-link', {oncreate: m.route.link}, 'Belegformular')),
            m('li.nav-item', m('a[href=/belegliste].nav-link', {oncreate: m.route.link}, 'Belegliste'))
            ])
        )
    }
}

module.exports = Menu