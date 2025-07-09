import { getTag  } from "./getTag";
export const isArray = (value: any): value is any[] => {
  if (Array.isArray) return Array.isArray(value);

  return getTag(value) === '[object Array]';
};