import { getTag } from "./getTag";

export const isDate = (value: any): value is Date => {
  return getTag(value) === '[object Date]';
};