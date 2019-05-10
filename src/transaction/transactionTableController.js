import DataListController from '../controllers/dataListController';
import TableController from '../controllers/tableController';

/**
 * Controller for the Transaction Table view
 */
export default class TransactionTableController extends TableController {
  constructor() {
    super(new DataListController('transaction'));
  }
}
