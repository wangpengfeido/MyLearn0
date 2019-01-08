// 对象的属性是 Generator 函数时，简写形式是在属性名前加*

let obj = {
    a: 1,
    * gen() {
        yield 'a';
    },
};

let g = obj.gen();
console.log(g.next());


