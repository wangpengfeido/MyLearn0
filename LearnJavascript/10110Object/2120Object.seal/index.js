// Object.seal 表示密封一个对象
// 将对象变为不可扩展，并将所有属性变为 configurable:false

let obj = {
  a: "a",
};

Object.seal(obj);

// 不生效：不可配置
obj.b = "b";
console.log(obj);

// 将 configurable 变为 false
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
