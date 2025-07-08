export const isEqual = (a: any, b: any):boolean => {
  if (a === b) {
    // handle +0, -0
    // +0 === -0  true
    // Object.is(+0, -0) false
    // 1/+0 Infinity
    // 1/-0 -Infinity
    return a !== 0 || 1 / a === 1 / b;
  }
  // NaN is designed to not equal to itself
  // NaN === NaN          false
  // NaN == NaN           false
  // Object.is(NaN, NaN)  true
  // Number.isNaN(0/0)              true
  // Number.isNan(Number.sqrt(-1))  true
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  return false;
};