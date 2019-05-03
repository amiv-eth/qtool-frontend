// Authentication will be handled here

import m from 'mithril';
import config from './resource_config';

export default class ResourceHandler {
  constructor(resource) {
    this.resource = resource;
    this.conf = config[this.resource];
  }

  getSort(query) {
    if ('sort' in query && query.sort && query.sort.length > 0) {
      if (query.sort === 'default' && this.conf.default_sort) {
        return this.conf.default_sort;
      }
      if (query.sort !== 'default') {
        return query.sort;
      }
    }
    return undefined;
  }

  buildQueryString(query) {
    const queryKeys = Object.keys(query);
    if (queryKeys.length === 0) return '';

    console.log(query);

    const fullQuery = {};

    fullQuery.sort = this.getSort(query) || {};

    if ('search' in query && query.search && query.search.length > 0 && this.conf.search_keys) {
      let search = query.search.length > 1 ? "{'and': [" : '';
      query.search.forEach(entry => {
        if (entry.length > 0) {
          let entry_search = "{'or': [";
          Object.values(this.conf.search_keys).forEach(field => {
            entry_search = `${entry_search}{'${field}.in': '${entry}'}, `;
          });
          entry_search += `]},`;
          search += entry_search;
        }
      });
      search = search.substring(0, search.length - 1)
      search += query.search.length > 1 ? ']}' : '';

      fullQuery.where = search;
    }

    queryKeys
      .filter(key => key !== 'sort' && key !== 'search')
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

  getId(id) {
    return m.request({
      method: 'GET',
      url: `${this.conf.url}/${id}`,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
      },
    });
  }

  async getFullList(query = false) {
    const new_query = query ? JSON.parse(JSON.stringify(query)) : {}; // To enforce to copy the object
    new_query.page = 1;

    const value = await this.get(new_query);

    const result = {};
    result.meta = value.meta;
    result.items = [];

    const page_content = { 1: value };

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
    await Promise.all(requests);
    for (let i = 1; i <= max_pages; i += 1) {
      result.items = result.items.concat(page_content[i].items);
    }
    result.meta = page_content[max_pages].meta;
    return result;
  }
}
