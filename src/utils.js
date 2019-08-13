import getLogger from 'webpack-log';

export const log = getLogger({ name: 'qTool-Logger', level: 'info', timestamp: true });

export function getNested(data, key) {
  if (data === undefined || key === undefined) {
    return undefined;
  }
  let nested_data = data;
  key.split('.').forEach(subKey => {
    try {
      nested_data = nested_data[subKey];
    } catch (e) {
      log.warn('Probably a nested key was defined but no fitting data was found');
      log.warn(e);
    }
  });
  return nested_data;
}
