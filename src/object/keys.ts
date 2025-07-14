export const keys = (object: any): string[] => {
  // handle null & undefined casue Object(null) and Object(undefined) will throw
  if (object == null) return [];
  const obj = Object(object);
  const result: string[] = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) result.push(key);
  }
  return result;
};