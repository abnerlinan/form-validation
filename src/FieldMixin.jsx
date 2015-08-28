function merge() {
  const ret = {};
  const args = [].slice.call(arguments, 0);
  args.forEach((a)=> {
    Object.keys(a).forEach((k)=> {
      ret[k] = a[k];
    });
  });
  return ret;
}

const FieldMixin = {
  setField(field, e) {
    let v = e;
    const target = e && e.target;
    if (target) {
      if ((target.nodeName + '').toLowerCase() === 'input' &&
        (target.type === 'checkbox') || (target.type === 'radio')) {
        v = target.checked;
      } else {
        v = e.target.value;
      }
    }
    const newFormData = {};
    newFormData[field] = v;
    this.setState({
      formData: merge(this.state.formData, newFormData),
    });
  },

  handleValidate(status, formData) {
    this.onValidate(status, formData);
  },

  onValidate(status, formData) {
    this.setState({
      status: merge(this.state.status, status),
      formData: merge(this.state.formData, formData),
    });
  },
};

export default FieldMixin;
