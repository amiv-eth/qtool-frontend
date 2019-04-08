import m from 'mithril';
import header from './header';
export default class Layout {
  static view(vnode) {
    return m('div', [m(header), m('main', vnode.children)]);
  }
}

