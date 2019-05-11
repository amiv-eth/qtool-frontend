function getNested(data, key) {
  let nested_data = data;
  if (!key || !data) {
    return undefined;
  }
  key.split('.').forEach(subKey => {
    nested_data = nested_data[subKey];
  });
  return nested_data;
}

export { getNested };
