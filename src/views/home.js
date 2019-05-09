import m from 'mithril';

export default class Main {
  /**
   * Home-Page of Website
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  static view() {
    return m('h1', 'Welcome to qtool!');
  }
}
