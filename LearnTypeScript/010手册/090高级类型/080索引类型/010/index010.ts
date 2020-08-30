// 此函数功能是从对象中选取属性
function plunk<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((name) => o[name]);
}

// keyof T 是索引类型查询操作符，代表 T 上 public 属性名的 联合。
// 例如，在下面的调用中：````keyof Person````可以与````'name'|'age'````代替

// T[K] 叫做索引访问操作符，代表 T 上 k 属性的类型
// 例如，在下面的调用中：Person[name] 就是 string 类型

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "tom",
  age: 14,
};
plunk(person, ["age"]);
// 不允许
// plunk(person, ["age", "sdf"]);

////////////////////////////////////////////////////////////
// 另一个例子

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

getProperty(person, "name");
// 不允许
// getProperty(person, "sdf);
