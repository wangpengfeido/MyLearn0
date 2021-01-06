interface One {
  a: number;
}

interface Two {
  b: string;
}

// One&Two 表示同时拥有两种类型的特性
let foo: One & Two = {
  a: 1,
  b: "2",
};
