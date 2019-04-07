//import './styles/styles.css';

import m from 'mithril';

const Layout = require('./views/layout');
const Home = require('./views/home');
const Belegformular = require('./views/belegformular');
const Belegliste = require('./views/belegliste');
const Transactionliste = require('./views/transactionliste');
import TransactionTableView from './transaction/transactionTableView';
import './style.js';

function layoutWith(view) {
  return {
    view() {
      return m(Layout, m(view));
    },
  };
}


m.route.prefix('');
m.route(document.body, '/', {
  '/': layoutWith(Home),
  '/belegformular': layoutWith(Belegformular),
  '/belegformular/:id': {
    render(vnode) {
      return m(Layout, m(Belegformular, vnode.attrs));
    },
  },
  '/belegliste': layoutWith(Belegliste),
  '/transactionliste': layoutWith(Transactionliste),
  '/testliste': layoutWith(TransactionTableView),
});
