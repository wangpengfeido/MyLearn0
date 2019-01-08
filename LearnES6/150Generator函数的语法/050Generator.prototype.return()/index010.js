// return方法，返回给定的值，并且终结遍历 Generator 函数。
let generator = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};

let g = generator();
console.log(g.next());
// 注意：return方法的返回值中：done为true
console.log(g.return('z'));       // { value: 'z', done: true }
console.log(g.next());
console.log(g.next());



