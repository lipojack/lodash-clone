import { getTag } from "./getTag";
import { equalArrays } from "./equalArrays";
import { equalObjects } from "./equalObjects";

// deep comparison on primitives and known objects
// unknown objects fallback with shallow comparison
export const baseIsEqual = (a: any, b: any) :boolean => {
  // primitives comparison
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / (a as number) === 1 / (b as number);
  }
  // handling NaN
  if (a !== a && b !== b) return true;
  
  // either one is null or undefined
  // null == undefined == null
  // typeof null -> 'object' ([object Null])
  // typeof undefined ->  'undefined'
  if (a == null || b == null) return false;

  if (typeof a !== typeof b) return false;

  const tagA = getTag(a);
  const tagB = getTag(b);

  if (tagA !== tagB) return false;

  switch (tagA) {
  case "[object Array]":
    return equalArrays(a, b, baseIsEqual);
  case "[object Object]":
    return equalObjects(a, b, baseIsEqual);
  case "[object Date]":
    return a.getTime() === b.getTime();
  case "[object RegExp]":
    return a.toString() === b.toString();
  default:
    // handling unknown object tag with shallow compare
    // - function
    // - unknown objects (Map, Set)
    // - class instance
    // - wrapper objects (new Number, new String)
    // ex: Object.is(new String('a'), new String('a')) [object String] unknown return false
    return Object.is(a, b);
  }
};