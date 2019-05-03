import ResourceHandler from '../auth';
import TableController from '../controllers/tableController';

/** Controller for a list of data from a python-eve REST-API. */
export default class TransactionController extends TableController {
  constructor() {
    super(new ResourceHandler('transaction'));
  }
}
