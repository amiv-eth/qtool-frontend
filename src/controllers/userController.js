import ResourceHandler, { getId } from '../auth';

export default class UserController {
  constructor() {
    this.resourceHandler = new ResourceHandler('user');
  }

  async getUser() {
    const user = await this.resourceHandler.getId(await getId());
    console.log(user);
    return user;
  }
}
