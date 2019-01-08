// Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
function* generator() {
    this.m = 'mmm';
}

generator.prototype.a = 'aaa';

let g = generator();

console.log(g instanceof generator); // true
console.log(g.a); // aaa

// 但是，g拿不到this上的对象，因为generator返回的是遍历器对象，不是this对象
console.log(g.m);  // undefined
// 所以，generator也不能与new 一起使用
