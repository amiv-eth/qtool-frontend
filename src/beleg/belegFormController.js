import FormController from '../controllers/formController';
import ResourceHandler from '../resourceHandler';

/**
 * Form Controller with added submit function
 */
export default class BelegFormController extends FormController {
  constructor(inputFields) {
    super(inputFields);
    this.transaction_resource = new ResourceHandler('transaction');
  }

  /**
   * Submits the current given form-content to the API
   */
  submit() {
    this.transaction_resource.post(this.formData);
    // TODO Reroute
  }
}
