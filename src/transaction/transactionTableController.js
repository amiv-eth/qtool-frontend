import DataListController from '../controllers/dataListController';
import TableController from '../controllers/tableController';
import { log } from '../utils';

/**
 * Controller for the Transaction Table view
 */
export default class TransactionTableController extends TableController {
  constructor() {
    log.debug(`Constructing new TransactionTableController`);

    super(new DataListController('transaction'));
  }
}
