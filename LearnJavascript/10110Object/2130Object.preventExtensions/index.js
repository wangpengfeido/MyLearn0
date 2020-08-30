// Object.preventExtensions 将一个对象变为不可扩展

let obj = {
  a: "a",
};

Object.preventExtensions(obj);

// 不生效：不可扩展
obj.b = "b";
console.log(obj);
