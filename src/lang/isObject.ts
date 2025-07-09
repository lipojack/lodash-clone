// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isObject = (value: any): value is object | Function => {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
};