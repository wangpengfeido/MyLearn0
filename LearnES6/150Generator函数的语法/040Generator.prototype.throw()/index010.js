// Generator返回的遍历器对象有throw方法，抛出错误在Generator内捕获
let generator = function* () {
    try {
        yield console.log('yielded');
    } catch (e) {
        console.log('inner', e);
    }
};

let g = generator();
// throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。
// 因为不执行next，Generator函数就不会执行，错误将被外部捕获
g.next();
try {
    g.throw(new Error('a'));
    // 由于catch只能执行一次
    // 所以第一次被Generator捕获，第二次被下面的catch捕获，第三次未被捕获
    g.throw(new Error('b'));
    g.throw(new Error('c'));
} catch (e) {
    console.log('outer', e);
}

// 注意：全局的throw只能被外部捕获，而不能被Generator捕获

