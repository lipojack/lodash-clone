// pick and pickBy does not include the inherited keys
// use Object.hasOwn(object, key)
// or
// Object.prototype.hasOwnProperty.call(object, key)
// to exclude inherited keys
export const pick = (object: Record<string, any>, paths: string | string[]): Record<string, any> => {
  // paths is '' or []
  if (!paths || (Array.isArray(paths) && paths.length === 0)) return {};

  const keys = typeof paths === 'string' ? [paths] : paths;
  return keys.reduce((result, key) => {
    if (key in object && Object.hasOwn(object, key)) result[key] = object[key];
    return result;
  }, {} as Record<string, any>);
};