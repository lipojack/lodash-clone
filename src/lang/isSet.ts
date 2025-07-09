import { getTag } from "./getTag";

export const isSet = (value: any): value is Set<unknown> => {
  return getTag(value) === '[object Set]';
};