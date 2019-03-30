var m = require('mithril');

var Menu = require('./menu');

var Layout = {
  view: function(vnode) {
    return m('div', [m(Menu), m('main', m('div.container.container-fluid.fs', vnode.children))]);
  },
};

module.exports = Layout;
