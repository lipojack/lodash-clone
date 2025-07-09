export const flatten = <T>(arr: (T | T[])[]): T[] => {
  return arr.reduce<T[]>((flattened, el) => flattened.concat(el), []);
};