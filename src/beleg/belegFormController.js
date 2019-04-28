import m from 'mithril';


export default class BelegFormController {
  /**
   * Should contain: GetDropdownContent, Patching, Submiting
   */
  constructor(inputFields) {
    this.inputFields = inputFields;

    this.formData = {};
    this.inputFields.forEach(field => {
      this.formData[field.attr_key] = '';
    });
  }

  setData(key, value) {
    // INPUT validation?
    this.formData[key] = value;
    console.log(this.formData);
  }

  getData(key) {
    return this.formData[key];
  }

  getDropDownData(key) {
    const field = this.inputFields.find(element => element.attr_key === key);
    const endpoint = field.endpoint;
    return endpoint.fetch().then(() => {
      if (endpoint.items.length === 0) {
        return [{ value: 'None', key: undefined }];
      }
      const firstItem = endpoint.items[0];
      const firstValue = firstItem[field.value_key];
      this.formData[field.attr_key] = firstValue;
      return endpoint.items.map(item => {
        const text = item[field.text_key];
        if (item[field.value_key] === firstValue) {
          return { selected: 'selected', key: item[field.value_key], text: text };
        }
        return { key: item[field.value_key], text: text };
      });
    });
  }
}
