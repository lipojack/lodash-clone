export const omit = (object: Record<string, any>, paths: string | string[]): Record<string, any> => {
  // paths is '' or []
  if (!paths || (Array.isArray(paths) && paths.length === 0)) return { ...object };
  
  const keys = typeof paths === 'string' ? [paths] : paths;
  // transform keys array to set for O(1) lookup
  const keysSet = new Set(keys);
  return Object.keys(object).reduce((result, key) => {
    if (!keysSet.has(key)) result[key] = object[key];
    return result;
  }, {} as Record<string, any>);
};