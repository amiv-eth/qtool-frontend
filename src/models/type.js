import m from 'mithril';
import api from '../network_config';

export default class Type {
  constructor() {
    this.items = [];
  }

  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/type`,
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
