// pick and pickBy does not include the inherited keys
// use Object.hasOwn(object, key)
// or
// Object.prototype.hasOwnProperty.call(object, key)
// to exclude inherited keys

export const pickBy = (object: Record<string, any>, predicate: (value: any, key: string) => boolean): Record<string, any> => {
  // short circuit for null and undefined
  if (object == null) return {};
  const result:Record<string, any> = {};
  for (const key in object) {
    // or if (Object.hasOwn(object, key))
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (predicate(value, key)) result[key] = value;
    }
  }
  return result;
};