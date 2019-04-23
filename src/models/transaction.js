import m from 'mithril';
import api from './api_config';

export default class Transaction {
  constructor() {
    this.items = [];
    this.sort = 'id.asc';
    this.page = 1;
    this.meta = {};
    this.where = '';
  }

  fetch() {
    let searchString = '';
    if (this.where !== '') {
      searchString = `&where=${this.where}`;
    }
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/Transaction/transaction?sort=${this.sort}&page=${
          this.page
        }${searchString}`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        this.items = result.items;
        this.meta = result.meta;
      });
  }

  /* fetchInfinite(pageNum) {
    return m.request({
      method: 'GET',
      url: `${api.address()}/Transaction/transaction?page=${pageNum}`,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
      },
    });
  } 

  fetchId(id) {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/Transaction/transaction/${id}`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => result);
  }

  
  submit(data) {
    return m.request({
      method: 'POST',
      url: `${api.address()}/Transaction/transaction`,
      data,
      headers: {
        'X-AMIV-API-TOKEN': 'quaestor',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } */

  setGeneralSearch(string) {
    // Returns whether there happened a change
    if (string.length < 3) {
      if (this.where === '') {
        return false;
      }
      this.where = '';
      this.page = 1;
      this.fetch();
      return true;
    }
    const fields = ['financial_year', 'date', 'description', 'amount', 'amount_in_chf', 'comment'];
    let search = "{'or': [";
    Object.values(fields).forEach(field => {
      search = `${search}{'${field}.in': '${string}'}, `;
    });
    search += ']}';

    this.page = 1;
    this.where = search;
    return true;
  }

  setSort(sort) {
    this.sort = sort;
  }
}
