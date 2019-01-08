// 由于 Generator 函数就是遍历器生成函数
// 所以，可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。

let obj = {
    [Symbol.iterator]:function* () {
      yield 'a';
      yield 'b';
      yield 'c';
    },
};

for(let i of obj){
    console.log(i);
}






