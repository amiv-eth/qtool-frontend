import m from 'mithril';
import { Dialog } from 'polythene-mithril';
import header from './header';

export default class Layout {
  static view(vnode) {
    return m('div', [
      m(header),
      m(Dialog),
      m(
        'main',
        {
          style: { height: 'calc(100vh - 130px)' },
        },
        vnode.children
      ),
    ]);
  }
}
