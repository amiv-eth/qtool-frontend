import ResourceHandler from '../auth';

/**
 * DataListController adds additional functions used for tables extending existing Resource-Handler functions
 */
export default class DataListController extends ResourceHandler {
  async getItems(query = false) {
    const result = await this.get(query);
    result.items.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.unique_id = this.conf.unique_id ? item[this.conf.unique_id] : item.id;
    });
    return result;
  }

  /**
   * Returns the full list according to the query by assembling all existing pages to a single Array
   * @param query containing the info for the requests
   * @returns {Promise<void>} Promise to the requested data assembled over different pages.
   */
  async getFullList(query = false) {
    const new_query = query ? JSON.parse(JSON.stringify(query)) : {}; // To enforce to copy the object
    new_query.page = 1;

    let value = {};

    try {
      value = await this.get(new_query);
    } catch (e) {
      console.log(e);
    }

    const result = {};
    result.meta = value.meta;
    result.items = [];

    const page_content = { 1: value }; // Mapping all results to this Objects (only then the order can be kept)

    const requests = []; // All additional requests are added to this array
    const max_pages = result.meta.last_page;

    for (let page = 2; page <= max_pages; page += 1) {
      const inner_query = JSON.parse(JSON.stringify(new_query)); // To enforce to copy the object
      inner_query.page = page;
      requests.push(
        this.get(inner_query).then(res => {
          page_content[page] = res; // Adding the whole content to the map
        })
      );
    }

    try {
      await Promise.all(requests); // Waiting till all promises are fulfilled
    } catch (e) {
      console.log(e);
    }

    for (let i = 1; i <= max_pages; i += 1) {
      result.items = result.items.concat(page_content[i].items); // Assembling one array of all results
    }
    result.meta = page_content[max_pages].meta; // Meta is the one from the last page
    return result;
  }

  /**
   * Returns the full list according to the query by assembling several requests to a single Array
   * @param ids array filled with every requested id
   * @returns {Promise<*[]>} Promise to the requested data as array assembled from all ids.
   */
  async getIds(ids) {
    if (ids.length === 0) {
      return [];
    }
    if (ids.length === 1) {
      return [await this.getId(ids)];
    }

    const value = await this.getId(ids[0]); // Waiting till promise is fulfilled

    let result = [];

    const content = { 0: value }; // Mapping all entries to their index in the ids array

    const requests = []; // All id requests go here
    const max_ids = ids.length;

    for (let id = 1; id < max_ids; id += 1) {
      requests.push(
        this.getId(ids[id]).then(res => {
          content[id] = res;
        })
      );
    }
    await Promise.all(requests); // Waiting till all promise from requests are fulfilled
    for (let i = 0; i < max_ids; i += 1) {
      result = result.concat(content[i]); // assembling array tobe returned
    }
    return result;
  }
}
