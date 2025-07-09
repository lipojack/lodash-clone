import { getTag } from "./getTag";

export const isRegExp = (value: any): value is RegExp => {
  return getTag(value) === '[object RegExp]';
};