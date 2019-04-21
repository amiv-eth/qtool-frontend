import m from 'mithril';
import infinite from 'mithril-infinite';
import { List, ListTile, Toolbar, Search, Button, Icon } from 'polythene-mithril';
import 'polythene-css';
import { styler } from 'polythene-core-css';

const tableStyles = [
  {
    '.toolbar': {
      'grid-row': 1,
      display: 'flex',
    },
    '.tableTile': {
      padding: '10px',
      'border-bottom': '1px solid rgba(0, 0, 0, 0.12)',
      'align-items': 'center',
    },
  },
];

styler.add('tableview', tableStyles);

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
      tileContent,
      clickOnTitles = (controller, title) => {
        controller.setSort([[title, 1]]);
      },
      // Filters
    },
  }) {
    this.controller = controller;
    this.tableKeys = keys || [];
    this.tableTitles = titles;
    this.tileContent = tileContent;
    this.clickOnTitles = clickOnTitles;
  }

  /*
   * initFilterIdxs lets you specify the filters that are active at initialization.
   * They are specified as index to the nexted filterGroups array.
   */
  oninit() {
    // send filter to controller
  }

  arrowOrNot(controller, title) {
    const titleText = title.width ? title.text : title;
    if (!controller.sort) return false;
    let i;
    for (i = 0; i < this.tableTitles.length; i += 1) {
      const tableTitlei = this.tableTitles[i].width
        ? this.tableTitles[i].text
        : this.tableTitles[i];
      if (tableTitlei === titleText) break;
    }
    return this.tableKeys[i] === controller.sort[0][0];
  }

  getItemData(data) {
    // Loads Data if no specific method is defined in tile content.
    // default if tile content was not defined
    return this.tableKeys.map(key => {
      // Access a nested key, indicated by dot-notation
      let nestedData = data;
      key.split('.').forEach(subKey => {
        nestedData = nestedData[subKey];
      });
      return m('div', { style: { width: `${98 / this.tableKeys.length}%` } }, nestedData);
    });
  }

  item() {
    return data =>
      m(ListTile, {
        className: 'themed-list-tile',
        // hoverable: this.clickOnRows,
        // compactFront: true,
        // compact: true,
        content: m(
          'div',
          {
            /* onclick: () => {
          if (this.clickOnRows) this.clickOnRows(data);
        }, */
            className: 'tableTile',
            style: { width: '100%', display: 'flex' },
          },
          this.tileContent ? this.tileContent(data) : this.getItemData(data)
        ),
      });
  }

  getSelectedFilterQuery() {}

  view({ attrs: { controller, titles, tools = false, tableHeight = false } }) {
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
      [
        m(Toolbar, {
          className: 'toolbar',
          compact: true,
          content: [
            m(Search, {
              textfield: {
                label: 'Search',
                onChange: ({ value }) => {
                  // this is called not only if the value changes, but also the focus.
                  // we only want to change the search of the value is changed, therefore we
                  // have to track changes in the search value
                  // if (value !== this.searchValue) controller.debouncedSearch(value);
                  this.searchValue = value;
                },
              },
              fullWidth: false,
            }),
            tools ? tools.map((tool) => 
              m(Button, {
                className: 'blue-button',
                border: true,
                label: tool.label,
                events: { onclick: () => {tool.onclick(); }},//func.onclick },
              })
            ) : '',
          ],
        }),
        // please beare with this code, it is the only way possible to track the selection
        // status of all the filters of the same group and make sure that they are really
        // mutually exclusive (that way when you click on one filter in the group, the other
        // ones in this group will be deselected)
        m(List, {
          className: 'scrollTable',
          style: {
            'grid-row': this.filters ? 3 : 2,
            ...(tableHeight ? { height: tableHeight } : {}),
          },
          tiles: [
            m(ListTile, {
              className: 'tableTile',
              hoverable: this.clickOnTitles,
              content: m(
                'div',
                { style: { width: '100%', display: 'flex' } },
                // Either titles is a list of titles that are distributed equally,
                // or it is a list of objects with text and width
                titles.map((title, i) =>
                  m(
                    'div',
                    {
                      onclick: () => {
                        if (this.clickOnTitles && this.tableKeys[i]) {
                          this.clickOnTitles(controller, this.tableKeys[i]);
                        }
                      },
                      style: title.style
                        ? title.style
                        : { width: `${98 / this.tableKeys.length}%` },
                    },
                    [
                      title.style.width ? title.text : title,
                      this.arrowOrNot(controller, title)
                        ? m(Icon, { svg: { content: m.trust(icons.sortingArrow) } })
                        : '',
                    ]
                  )
                )
              ),
            }),
            m(infinite, controller.infiniteScrollParams(this.item())),
          ],
        }),
      ]
    );
  }
}
