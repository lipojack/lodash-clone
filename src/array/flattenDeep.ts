import { isArray } from "../lang/isArray";

export const flattenDeep = <T>(arr: (T | T[])[]): T[] => {
  const flattened: T[] = [];
  for (const el of arr) {
    if (isArray(el)) flattened.push(...flattenDeep<T>(el));
    else flattened.push(el);
  }
  return flattened;
};