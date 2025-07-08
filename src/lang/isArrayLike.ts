// check the object is structurally like an array
// [1, 2, 3]
// 'abc'
// { length: 2 }
// - has a .length property
// - the length is a non-negative integer
export function isArrayLike(obj: any): boolean {
  return obj != null &&
         typeof obj !== 'function' &&
         typeof obj.length === 'number' &&
         obj.length >= 0 &&
         // make sure obj.length is an integer, has no decimal
         obj.length % 1 === 0;
}