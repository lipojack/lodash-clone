export const equalArrays = (
  a: any[],
  b: any[],
  comparator: (valA: any, valB: any) => boolean
) :boolean => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!comparator(a[i], b[i])) return false;
  }
  return true;
};