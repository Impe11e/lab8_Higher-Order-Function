'use strict';

const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const type = types[i];
      const typeName = type.name.toLowerCase();
        if (typeof arg !== typeName) {
            throw new Error(`Wrong argument type! Expected ${typeName}`);
        }
    }
    const res = fn(...args);
    const lastType = types[types.length - 1];
    const lastTypeName = lastType.name.toLowerCase();
    if (typeof res !== lastTypeName) {
        throw new Error(`Wrong result type! Expected ${lastTypeName}`);
    }
    return res;
};

module.exports = { contract };
