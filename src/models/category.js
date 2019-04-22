import m from 'mithril';
import api from './api_config';

export default class Category {
  constructor() {
    this.items = [];
  }

  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/category`,
        headers: {
          'X-AMIV-API-TOKEN': 'quaestor',
          Accept: 'application/json',
        },
      })
      .then(result => {
        this.items = result.items;
      });
  }
}
