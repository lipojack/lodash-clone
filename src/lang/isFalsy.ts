export const isFalsy = (value: any): boolean => {
  return value === false || value === 0 || value === null || value === undefined || value === '' || Number.isNaN(value);
};