export const equalObjects = (
  objA: Record<string | symbol, any>,
  objB: Record<string | symbol, any>,
  comparator: (valA: any, valB: any) => boolean
) :boolean => {
  // Reflect.ownKeys(obj) return string and symbol keys
  // Object.keys(obj) only return string keys
  const keysA = Reflect.ownKeys(objA);
  const keysB = Reflect.ownKeys(objB);

  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!comparator(objA[key], objB[key])) return false;
  }
  return true;
};