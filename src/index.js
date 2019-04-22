import m from 'mithril';
import layout from './views/layout';
import Home from './views/home';
import Belegformular from './views/belegformular';
import Belegliste from './views/belegliste';
import Transactionliste from './views/transactionliste';
import TransactionTableView from './transaction/transactionTableView';
import './styles/base.less';

function layoutWith(view) {
  return {
    view() {
      return m(layout, m(view));
    },
  };
}

const transactionliste = new Transactionliste();

m.route.prefix('');
m.route(document.body, '/', {
  '/': layoutWith(Home),
  '/belegformular': layoutWith(Belegformular),
  '/belegformular/:id': {
    render(vnode) {
      return m(layout, m(Belegformular, vnode.attrs));
    },
  },
  '/belegliste': layoutWith(Belegliste),
  '/transactionliste': layoutWith(transactionliste),
  '/testliste': layoutWith(TransactionTableView),
});
