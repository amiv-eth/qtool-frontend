import FormController from '../controllers/formController';
import ResourceHandler from '../resourceHandler';
import { log } from '../utils';

/**
 * Form Controller with added submit function
 */
export default class BelegFormController extends FormController {
  constructor(inputFields) {
    log.debug(`Constructing new BelegFormController with inputfields ${inputFields}`);

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
