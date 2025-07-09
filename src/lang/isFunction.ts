// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = (value: any): value is Function => {
  // typeof function foo() {}  -> 'function'
  // getTag(function foo() {}) -> '[object Function]'
  return typeof value === 'function';
};