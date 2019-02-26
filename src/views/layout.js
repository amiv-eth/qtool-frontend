var m = require('mithril');

var Menu = require('./menu');

var Layout = {
    view: function(vnode) {
        return m('main.layout', [
            m(Menu),
            m('section', vnode.children)
        ])
    }
}

module.exports = Layout