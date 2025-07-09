import { flatten } from "./flatten";
export const flattenDepth = <T>(arr: (T | T[])[], depth: number = 1): (T | T[])[] => {
  let remain = depth;
  let flattened = arr;
  while (remain-- > 0) flattened = flatten<T>(flattened);
  return flattened;
};