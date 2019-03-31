import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/styles.css';

const m = require('mithril');

const Layout = require('./views/layout');
const Home = require('./views/home');
const Belegformular = require('./views/belegformular');
const Belegliste = require('./views/belegliste');
const Transactionliste = require('./views/transactionliste');

m.route(document.body, '/', {
  '/': {
    render() {
      return m(Layout, m(Home));
    },
  },
  '/belegformular': {
    render() {
      return m(Layout, m(Belegformular));
    },
  },
  '/belegformular/:id': {
    render(vnode) {
      return m(Layout, m(Belegformular, vnode.attrs));
    },
  },
  '/belegliste': {
    render() {
      return m(Layout, m(Belegliste));
    },
  },
  '/transactionliste': {
    render() {
      return m(Layout, m(Transactionliste));
    },
  },
});
