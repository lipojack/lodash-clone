import { getTag } from "./getTag";

export const isMap = (value:any): value is Map<unknown, unknown> => {
  return getTag(value) === '[object Map]';
};