type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

export const classNames = (...args: any[]) => {
  return _classNames(...args).join(' ');

  function _classNames(...args: any[]) {
    const result: any[] = [];

    args.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(..._classNames(...item));
      } else if (isPlainObject(item)) {
        for (const [key, value] of Object.entries(item)) {
          if (Boolean(value)) {
            result.push(key);
          }
        }
      } else {
        if (typeof item === 'string' && item.length > 0) {
          result.push(item);
        }
        if (typeof item === 'number' && item !== 0) {
          result.push(String(item).trim());
        }
      }
    });
    return result;
  }
}