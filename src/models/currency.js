import m from 'mithril';
import api from'./api_config';

export default class Currency {

  constructor(){
    items = [];
  }
  
  fetch() {
    return m
      .request({
        method: 'GET',
        url: `${api.address()}/utility/currency`,
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
