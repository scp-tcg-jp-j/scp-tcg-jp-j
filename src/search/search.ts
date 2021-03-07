import {computedFrom} from 'aurelia-framework';

export class Search {
  public message: string = '接続されていません'
  constructor() {
    fetch('https://localhost/connectivity', { mode: 'cors' })
      .then(response => response.json())
      .then(() => this.message = '接続されています')
      .catch(reason => this.message = JSON.stringify(reason))
  }

}
