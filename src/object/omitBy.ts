export const omitBy = (object: any, predicate: (value: any, key: string) => boolean): Record<string, any> => {
  // short circuit for null and undefined
  if (object == null) return {};
  return Object.keys(object).reduce((result, key) => {
    if (!predicate(object[key], key)) result[key] = object[key];
    return result;
  }, {} as Record<string, any>);
};