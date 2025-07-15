// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const curry = (fn: Function): Function => {
  const argsLen = fn.length;
  const curried = (...args: any[]):any => {
    if (args.length >= argsLen) {
      return fn(...args);
    } else {
      return (...nextArgs: any[]) => curried(...args, ...nextArgs);
    }
  };
  return curried;
};


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const curryWithPlaceholder = (fn: Function): Function => {
  const _ = Symbol('curry_placeholder');
  const argsLen = fn.length;
  const curried = (...args: any[]): any => {
    
    const nonPlaceHolderCount = args.filter((arg) => arg !== _).length;
    if (nonPlaceHolderCount >= argsLen) {
      return fn(...args);
    }

    return (...nextArgs: any[]) => {
      const filledArgs: any[] = [];
      let nextIndex = 0;

      for (const arg of args) {
        if (arg === _ && nextIndex < nextArgs.length) {
          filledArgs.push(nextArgs[nextIndex++]);
        } else {
          filledArgs.push(arg);
        }
      }

      while (nextIndex < nextArgs.length) filledArgs.push(nextArgs[nextIndex++]);
      
      return curried(...filledArgs);
    };
  };
  return curried;

};