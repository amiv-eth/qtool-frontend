import ResourceHandler from '../resourceHandler';
import {getId} from '../authentication';

export default class UserController {
  constructor() {
    this.resourceHandler = new ResourceHandler('user');
  }

  async init() {
    this._user = await this.resourceHandler.getId(await getId());
  }

  get user() {
    if (typeof this._user === 'undefined') {
      return {};
    }
    return this._user;
  }

  get iban() {
    return this._user.iban;
  }
}
