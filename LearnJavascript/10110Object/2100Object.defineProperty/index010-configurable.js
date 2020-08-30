// Object.defineProperty 用于定义或修改一个属性

// configurable 表示属性是否可以被删除, 以及 value 和 writable 特性意外的其他特性是否可以被修改

const obj = {};

Object.defineProperty(obj, "a", {
  value: "a",
  configurable: false,
  writable: true,
  enumerable: true,
});

// 不允许，因为不能修改 configurable
// Object.defineProperty(obj, "a", { configurable: true });

// 不生效，因为不能删除属性
delete obj.a;
Reflect.deleteProperty(obj, "a");
console.log(obj);
