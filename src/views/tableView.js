import m from 'mithril';
import infinite from 'mithril-infinite';
import { List, ListTile, Toolbar, Search, Button, Icon } from 'polythene-mithril';
import { styler } from 'polythene-core-css';
import { icons } from '../../res/images/elements';
import { i18n } from '../models/language';
import { log } from '../utils';

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

/**
 * Handles the whole viewstuff for a Table
 */
export default class TableView {
  /**
   * @param controller A table Controller
   * @param titles array of titles consisting of the following:
   *  - text: Title-text
   *  - style: all style attributes for the field
   *  - conditional_background: function for background color based on the given row
   *  - key: key of the data of the object. can be embedded
   *  - sort: separate sorting key
   * @param tileContent
   * @param clickOnTitles
   * @param clickOnRows
   */
  constructor({
    attrs: {
      controller,
      titles,
      tileContent = false,
      clickOnTitles = (ctrl, title) => {
        ctrl.setSort(title);
      },

      clickOnRows = (ctrl, row) => {
        ctrl.select(row.unique_id);
      },
      // Filters
    },
  }) {
    log.debug(`Constructing new TableView with ${controller}, ${titles}`);

    this.controller = controller;
    this.titles = titles || [];
    this.tileContent = tileContent;
    this.clickOnTitles = clickOnTitles;
    this.clickOnRows = clickOnRows;
  }

  /**
   * generic Function filling the list when no no other is defined
   * @param data
   * @returns {*|Array|...*[]|{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}[]}
   */
  getItemData(data) {
    // Loads Data if no specific method is defined in tile content.
    // default if tile content was not defined
    return this.titles.map(elem => {
      // Access a nested key, indicated by dot-notation
      // TODO: Might be quite inefficient
      let nestedData = data;
      elem.key.split('.').forEach(subKey => {
        nestedData = nestedData[subKey];
      });
      return m('div', { style: { width: `${98 / this.titles.length}%` } }, nestedData);
    });
  }

  /**
   * Assembles a TableTile from the given data
   * @returns {function(*=): {dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  item() {
    return data =>
      m(ListTile, {
        className: 'themed-list-tile',
        hoverable: this.clickOnRows,
        compactFront: true,
        compact: true,
        content: m(
          'div',
          {
            onclick: () => {
              if (this.clickOnRows && this.selectable) this.clickOnRows(this.controller, data);
            },
            className: 'tableTile',
            style: {
              width: '100%',
              height: '100%',
              display: 'flex',
              backgroundColor: this.controller.selected.includes(data.unique_id) ? '#B8B8B8' : null,
            },
          },
          this.tileContent ? this.tileContent(data) : this.getItemData(data)
        ),
      });
  }

  // getSelectedFilterQuery() {}
  /**
   * View Function
   * @returns {{dom, domSize, instance, children, _state, skip, tag, text, state, key, events, attrs}}
   */
  view({
    attrs: {
      controller,
      buttons = false,
      tableHeight = false,
      selectable = false,
      searchable = false,
      sortable = false,
    },
  }) {
    this.selectable = selectable;
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
            searchable
              ? m(Search, {
                  textfield: {
                    label: i18n('search'),
                    onChange: ({ value }) => {
                      if (value !== this.searchValue) controller.setSearch(value);
                      this.searchValue = value;
                    },
                  },
                  fullWidth: false,
                })
              : '',
            buttons
              ? buttons.map(button =>
                  button
                    ? m(Button, {
                        className: 'blue-button',
                        border: true,
                        label: i18n(button.label_key),
                        events: {
                          onclick: () => {
                            button.onclick();
                          },
                        },
                      })
                    : ''
                )
              : '',
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
                this.titles.map(title =>
                  m(
                    'div',
                    {
                      onclick: () => {
                        if (this.clickOnTitles && sortable) {
                          this.clickOnTitles(controller, title.sort);
                        }
                      },
                      style: title.style
                        ? title.style
                        : { width: `${98 / this.tableKeys.length}%` },
                    },
                    [
                      title.style.width ? i18n(title.title_key) : title,
                      (controller.getSort().split('.')[0] === title.key ||
                        controller.getSort().split('.')[0] === title.sort) &&
                      sortable
                        ? m(Icon, {
                            svg: {
                              content: m.trust(
                                controller.getSort().split('.')[1] === 'desc'
                                  ? icons.sortingArrowUp
                                  : icons.sortingArrowDown
                              ),
                            },
                          })
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
