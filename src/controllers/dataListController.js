import ResourceHandler from '../auth';

export default class DataListController extends ResourceHandler {
  async getItems(query = false) {
    const result = await this.get(query);
    result.items.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.unique_id = this.conf.unique_id ? item[this.conf.unique_id] : item.id;
    });
    return result;
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
