export default class FormController {
  /**
   * Controller for a generic Form
   * Should contain: GetDropdownContent, Patching, Submiting,
   */
  constructor(inputFields) {
    this.inputFields = inputFields;

    this.formData = {}; // content of the Form to be saved
    this.inputFields.forEach(field => {
      this.formData[field.attr_key] = field.value;
    });
  }

  /**
   * Setting the given value to the corresponding position
   * @param key location to save the value to
   * @param value value to be saved in the form
   */
  setData(key, value) {
    // INPUT validation
    this.formData[key] = value;
  }

  /**
   * Returns value of given position in formData
   * @param key position of the searched value
   * @returns {*} value at the corresponding position
   */
  getData(key) {
    return this.formData[key];
  }

  /**
   * Returns all values for a Dropdown menu as an array which can be inserted in a dropdown
   * @param key: key of the given attribute which should be converted to Dropdown data
   * @returns {Promise<{value: string, key: undefined}[]|*>} Promise to a fully prepared array of dropdown items
   * dropdown items consist of: text (text to be shown), key (key to API id), potentially style (as CSS attributes)
   */
  async getDropDownData(key) {
    const field = this.inputFields.find(element => element.attr_key === key);
    const { endpoint } = field;
    // Saving all items in a const
    let result = [];

    try {
      result = await endpoint.getFullList({ sort: 'default' });
    } catch (e) {
      console.log(e);
    }

    // Default for empty request
    if (result.length === 0) {
      return [{ value: 'None', key: undefined }];
    }

    // Special treatment for the first item
    const firstValue = result.items[0][field.value_key];
    this.formData[field.attr_key] = firstValue;

    // Pairing together the items with the only attributes needed to build a dropdown
    return result.items.map(item => {
      const text = item[field.text_key];
      if (item[field.value_key] === firstValue) {
        return { style: { selected: 'selected' }, key: item[field.value_key], text };
      }
      return { key: item[field.value_key], text };
    });
  }
}
