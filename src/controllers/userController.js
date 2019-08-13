import ResourceHandler from '../resourceHandler';
import { getId } from '../authentication';
import { log } from '../utils';

export default class UserController {
  constructor() {
    log.debug(`Constructing new UserController`);

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
    if (typeof this._user === 'undefined') {
      return null;
    }
    return this._user.iban;
  }

  async set_iban(iban) {
    return this.resourceHandler.patch(await getId(), { iban });
  }
}
