// Authentication will be handled here

import m from 'mithril';
import config from './resource_config';

export default class ResourceHandler {
  constructor(resource) {
    this.resource = resource;
    this.conf = config[this.resource];
  }

  buildQueryString(query) {
    const queryKeys = Object.keys(query);
    if (queryKeys.length === 0) return '';

    const fullQuery = {};

    if ('sort' in query && query.sort && query.sort.length > 0) {
      if (query.sort === 'default' && this.conf.default_sort) {
        fullQuery.sort = this.conf.default_sort;
      } else if (query.sort !== 'default') {
        fullQuery.sort = query.sort;
      }
    }

    queryKeys
      .filter(key => key !== 'sort')
      .forEach(key => {
        fullQuery[key] = JSON.stringify(query[key]);
      });

    return m.buildQueryString(fullQuery);
  }

  get(query = false) {
    return m.request({
      method: 'GET',
      url: `${this.conf.url}${query ? `?${this.buildQueryString(query)}` : ''}`,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
      },
    });
  }

  getFullList(query = false) {
    const new_query = query ? JSON.parse(JSON.stringify(query)) : {}; // To enforce to copy the object
    new_query.page = 1;

    return this.get(new_query).then(first_page => {
      const result = {};
      result.meta = first_page.meta;
      result.items = [];

      const page_content = { 1: first_page };

      const requests = [];
      const max_pages = result.meta.last_page;

      for (let page = 2; page <= max_pages; page += 1) {
        const inner_query = JSON.parse(JSON.stringify(new_query)); // To enforce to copy the object
        inner_query.page = page;
        requests.push(
          this.get(inner_query).then(res => {
            page_content[page] = res;
          })
        );
      }
      return Promise.all(requests).then(() => {
        for (let i = 1; i <= max_pages; i += 1) {
          result.items = result.items.concat(page_content[i].items);
        }
        result.meta = page_content[max_pages].meta;
        return result;
      });
    });
  }
}
