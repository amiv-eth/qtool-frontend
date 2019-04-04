import m from 'mithril';
import infinite from 'mithril-infinite';


export default class TableView {
  /* Shows a table of objects for a given API resource.
   *
   * Required attributes:
   *   vnode: { attrs: { controller, titles, keys } }
   *   - controller: a listcontroller for some API resource data
   *   - titles: the titles of the table
   *   - keys: Keys of this resource to display as columns, e.g. ['firstname']
   *       Works with embedded resources, i.e. if you add
   *       { embedded: { event: 1 } } to a list of eventsignups,
   *       you can display event.title_de as a table key
   *   - filters: list of list of objects, each inner list is a group of mutual exclusive
   *       filters.
   *       A filter can have properties 'name', 'query' and optionally 'selected' for
   *       the initial selection state.
   */
  constructor({
    attrs: {
      controller, 
      keys,
      titles,
      tileContent
      //Filters
    },
  }) {
    this.controller = controller;
    this.tablekeys = keys || [];
    this.tableTitles = titles;
    this.tileContent = tileContent;
  }

  /*
   * initFilterIdxs lets you specify the filters that are active at initialization.
   * They are specified as index to the nexted filterGroups array.
   */
  oninit() {
    //send filter to controller
  }

  getItemData(data) {
    console.log('Needs to be implemented') //default if tile content was not defined
  }

  item() {    
    return data => m('th', 
      this.tileContent ? this.tileContent(data) : this.getItemData(data)
    );
  }

  getSelectedFilterQuery() {
  }

  view({
    attrs: {
      //controller,
      titles,
    },
  }) {
    const searchForm = m(
      'form',
      m('input.form-control[type=text]', {
        placeholder: 'Suche',
        oninput: m.withAttr('value', value => {
          //searchString(value); //TODO: searchString function
        }),
      })
    );

    return m(
      'div.tabletool',
      {
        style: {
          display: 'grid',
          height: '100%',
          'grid-template-rows': this.filters
            ? '48px 40px calc(100% - 88px)'
            : '48px calc(100% - 78px)',
          'background-color': 'white',
        },
      },
      [m('div.search', { style: { width: '67%', display: 'inline-block' } }, searchForm), 
        m('div.filter', []), 
        m(
        'table.table.table-striped.table-responsive',
        [
          m('div', {class: 'pe-list-tile pe-list-tile--hoverable tableTile'},
            m('div', {class: 'pe-list-tile__primary'},[
                titles.map((title) => m(
                  'th', {style: {width: title.width}} ,title.text
                ))
              ]),
            m(infinite, this.controller.infiniteScrollParams(this.item())),
          )
        ]),
      ]
    );
  }
}
