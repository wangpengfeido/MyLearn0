// Object.freeze 冻结一个对象
// 不能添加新属性；不能修改属性的值及属性描述；不能删除属性

// 它会将所有现有属性的 writable 和 configurable 设置为 false。
// 冻结的对象是不可扩展的

let obj = {
  a: "a",
  b: { value: "b" },
};

Object.freeze(obj);

// 不生效：不能添加新属性
obj.c = "c";
console.log(obj);

// 不生效：不能修改属性的值及属性描述
obj.a = 1;
console.log(obj);

// 但是引用值的属性是可以修改的
obj.b.value = 1;
console.log(obj);

// 不生效：不能删除属性
Reflect.deleteProperty(obj, "a");
console.log(obj);

// writable 和 configurable 被设置为 false
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
