import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

var m = require('mithril');

var Layout = require('./views/layout');
var Home = require('./views/home');
var Belegformular = require('./views/belegformular');
var Belegliste = require('./views/belegliste');
var Transactionliste = require('./views/transactionliste')

m.route(document.body, '/', {
    '/': {
        render: function() {
            return m(Layout, m(Home))
        }
    },
    '/belegformular': {
        render: function() {
            return m(Layout, m(Belegformular))
        }
    },
    '/belegformular/:id': {
        render: function(vnode) {
            return m(Layout, m(Belegformular, vnode.attrs))
        }
    },
    '/belegliste': {
        render: function() {
            return m(Layout, m(Belegliste))
        }
    },
    '/transactionliste': {
        render: function() {
            return m(Layout, m(Transactionliste))
        }
    }
});