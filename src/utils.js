function getNested(data, key) {
  if (data === undefined || key === undefined) {
    return undefined;
  }
  let nested_data = data;
  console.log(nested_data);
  key.split('.').forEach(subKey => {
    nested_data = nested_data[subKey];
  });
  return nested_data;
}

export { getNested };
