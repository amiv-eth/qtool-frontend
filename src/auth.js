// Authentication will be handled here

import m from 'mithril';
import network_config from './network_config';
import resource_config from './resource_config';

export default class ResourceHandler {
  constructor(resource) {
    this.resource = resource;
    this.conf = resource_config[this.resource];
    this.conf.url = `${network_config.address()}/${this.conf.path}`;
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
      search = search.substring(0, search.length - 1);
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

  submit(data) {
    return m.request({
      method: 'POST',
      url: `${this.conf.url}`,
      data,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async getFullList(query = false) {
    // TODO: Maybe needs to put in a separate Child-class
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

  async getIds(ids) {
    if (ids.length === 0) {
      return undefined;
    }
    if (ids.length === 1) {
      return [this.getId(ids)];
    }

    const value = await this.getId(ids[0]);

    let result = [];

    const content = { 0: value };

    const requests = [];
    const max_ids = ids.length;

    for (let id = 1; id < max_ids; id += 1) {
      requests.push(
        this.getId(ids[id]).then(res => {
          content[id] = res;
        })
      );
    }
    await Promise.all(requests);
    for (let i = 0; i < max_ids; i += 1) {
      result = result.concat(content[i]);
    }
    return result;
  }
}
