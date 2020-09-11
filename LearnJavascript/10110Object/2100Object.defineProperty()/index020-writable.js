const obj = {};

Object.defineProperty(obj, "a", {
  value: "a",
  configurable: true,
  writable: false,
  enumerable: true,
});

// 不生效，因为不可写
obj.a = 1;
console.log(obj);

Object.defineProperty(obj, "b", {
  value: { value: 1 },
  configurable: true,
  writable: false,
  enumerable: true,
});
// 引用值的属性仍然可以修改
obj.b.value = 2;
console.log(obj);
