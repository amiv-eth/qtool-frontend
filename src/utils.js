function getNested(data, key) {
  let nested_data = data;
  key.split('.').forEach(subKey => {
    nested_data = nested_data[subKey];
  });
  return nested_data;
}

export { getNested };
