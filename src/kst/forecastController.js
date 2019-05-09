import DataListController from '../controllers/dataListController';
import TableController from '../controllers/tableController';

/**
 * Controller for the forecast Table
 */
export default class ForecastController extends TableController {
  constructor() {
    super(new DataListController('transaction_budgetitem'));
  }

  /**
   * Overrides the original Function to add differences.
   * @param pageNum Number of loaded page
   * @returns {Promise<*>} To array of List items
   */
  async getPageData(pageNum) {
    this.query.page = pageNum;
    const result = await this.endpoint.getItems(this.query); // gets them items
    this.totalPages = result.meta.last_page;
    result.items.map(_item => {
      const item = Object.assign({}, _item);
      item.expenditure_budgeted = _item.expenditure_budgeted.toFixed(2);
      item.expenditure_calculated = _item.expenditure_calculated.toFixed(2);
      item.revenue_budgeted = _item.revenue_budgeted.toFixed(2);
      item.revenue_calculated = _item.revenue_calculated.toFixed(2);
      item.difference_budgeted = (_item.revenue_budgeted - item.expenditure_budgeted).toFixed(2);
      item.difference_calculated = (_item.revenue_calculated - item.expenditure_calculated).toFixed(
        2
      );
      return item;
    });
    return result.items;
  }
}
