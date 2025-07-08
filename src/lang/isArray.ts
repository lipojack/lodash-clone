export const isArray = (value: any): value is any[] => {
  if (Array.isArray) return Array.isArray(value);

  return Object.prototype.toString.call(value) === '[object Array]';
};