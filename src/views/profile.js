/* import m from 'mithril';
import { Card } from 'polythene-mithril'; */
import UserController from '../controllers/userController';

export default class Profile {
  constructor() {
    this.user = {};
    this.userController = new UserController();
  }

  async oninit() {
    this.user.name = await this.userController.getUserName();
  }

  view() {
    return this.user.name;
  }
}
