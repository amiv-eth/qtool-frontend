export default class FormController {
  /**
   * Should contain: GetDropdownContent, Patching, Submiting,
   */
  constructor(inputFields) {
    this.inputFields = inputFields;

    this.formData = {};
    this.inputFields.forEach(field => {
      this.formData[field.attr_key] = field.value;
    });
  }

  setData(key, value) {
    // INPUT validation?
    this.formData[key] = value;
  }

  getData(key) {
    return this.formData[key];
  }

  getDropDownData(key) {
    const field = this.inputFields.find(element => element.attr_key === key);
    const { endpoint } = field;
    return endpoint.getFullList({ sort: 'default' }).then(result => {
      if (result.length === 0) {
        return [{ value: 'None', key: undefined }];
      }
      console.log(result)
      const firstItem = result.items[0];
      const firstValue = firstItem[field.value_key];
      this.formData[field.attr_key] = firstValue;
      return result.items.map(item => {
        const text = item[field.text_key];
        if (item[field.value_key] === firstValue) {
          return { selected: 'selected', key: item[field.value_key], text };
        }
        return { key: item[field.value_key], text };
      });
    });
  }

  // TODO submitting
}
