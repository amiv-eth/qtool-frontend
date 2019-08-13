import getLogger from 'webpack-log';

export const log = getLogger({ name: 'qTool-Logger', level: 'debug', timestamp: true });

export function getNested(data, key) {
  if (data === undefined || key === undefined) {
    return undefined;
  }
  let nested_data = data;
  key.split('.').forEach(subKey => {
    try {
      nested_data = nested_data[subKey];
    } catch (e) {
      console.log(e);
      console.log('Probably a nested key was defined but no fitting data was found');
    }
  });
  return nested_data;
}
