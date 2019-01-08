// 使用变通方法，生成一个实例，既能用next方法，又能获得正常this

let generator = function* () {
    this.a = Math.random();
    yield this.b = Math.random();
    yield this.c = Math.random();
};

function F() {
    // 注意：这样写是有缺陷的，只能调用一次F，否则就会产生问题：多次在修改generator的原型
    return generator.call(generator.prototype);
}

let f = new F();

console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(f.a);
console.log(f.b);
console.log(f.c);


