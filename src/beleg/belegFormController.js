import FormController from '../controllers/formController';

export default class BelegFormController extends FormController {
  // will be needed in later state thus disabling it for now
  // eslint-disable-next-line no-useless-constructor
  constructor(inputFields) {
    super(inputFields);
  }
}
