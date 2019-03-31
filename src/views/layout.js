const m = require('mithril');

const Menu = require('./menu');

const Layout = {
  view(vnode) {
    return m('div', [m(Menu), m('main', m('div.container.container-fluid.fs', vnode.children))]);
  },
};

module.exports = Layout;
