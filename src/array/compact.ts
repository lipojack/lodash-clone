import { isFalsy } from "../lang/isFalsy";

export const compact = <T>(arr: T[]): T[] => {
  return arr.filter((val) => !isFalsy(val));
};