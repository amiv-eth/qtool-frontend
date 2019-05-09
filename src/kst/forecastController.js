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
    result.items.forEach(item => {
      item.expenditure_budgeted = item.expenditure_budgeted.toFixed(2);
      item.expenditure_calculated = item.expenditure_calculated.toFixed(2);
      item.revenue_budgeted = item.revenue_budgeted.toFixed(2);
      item.revenue_calculated = item.revenue_calculated.toFixed(2);
      item.difference_budgeted = (item.revenue_budgeted - item.expenditure_budgeted).toFixed(2);
      item.difference_calculated = (item.revenue_calculated - item.expenditure_calculated).toFixed(
        2
      );
    });
    return result.items;
  }
}
