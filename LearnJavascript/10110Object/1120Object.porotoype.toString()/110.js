// "[object Boolean]"
console.log(true, Object.prototype.toString.call(true));

// "[object Number]"
console.log(1, Object.prototype.toString.call(1));

// "[object String]"
console.log("a", Object.prototype.toString.call("a"));

// "[object Null]"
console.log(null, Object.prototype.toString.call(null));

// "[object Undefined]"
console.log(undefined, Object.prototype.toString.call(undefined));

// "[object Symbol]"
console.log(Symbol(), Object.prototype.toString.call(Symbol()));

// "[object BigInt]"
console.log(1n, Object.prototype.toString.call(1n));

// "[object Object]"
console.log({}, Object.prototype.toString.call({}));

// "[object Array]"
console.log([], Object.prototype.toString.call([]));

// "[object Function]"
console.log(
  () => {},
  Object.prototype.toString.call(() => {})
);

// "[object Date]"
console.log(new Date(), Object.prototype.toString.call(new Date()));

// "[object RegExp]"
console.log(/.*/, Object.prototype.toString.call(/.*/));

// "[object Set]"
console.log(new Set(), Object.prototype.toString.call(new Set()));

// "[object Map]"
console.log(new Set(), Object.prototype.toString.call(new Map()));

// "[object WeakSet]"
console.log(new WeakSet(), Object.prototype.toString.call(new WeakSet()));

// "[object WeakMap]"
console.log(new WeakMap(), Object.prototype.toString.call(new WeakMap()));

// "[object Promise]"
console.log(
  Promise.resolve(),
  Object.prototype.toString.call(Promise.resolve())
);

// "[object GeneratorFunction]"
console.log(
  function* () {},
  Object.prototype.toString.call(function* () {})
);

// "[object AsyncFunction]"
console.log(
  async function () {},
  Object.prototype.toString.call(async function () {})
);

// "[object Error]"
console.log(new Error(), Object.prototype.toString.call(new Error()));

// "[object Math]"
console.log(Math, Object.prototype.toString.call(Math));
