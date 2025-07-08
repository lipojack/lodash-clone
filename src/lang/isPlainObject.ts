export const isPlainObject = (value: any): value is Record<string, any> => {
  // check if it's ab array, function, null or built-in objects (Date, Map...)
  if (Object.prototype.toString.call(value) !== '[object Object]') return false;
  
  // the proto tells what it's created from
  // - Object.prototype ({}, new Object())
  // - null (Object.create(null) a {} but does not have prototype, used as pure key-value dict)
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};