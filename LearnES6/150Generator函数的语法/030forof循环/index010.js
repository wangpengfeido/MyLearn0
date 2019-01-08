// for...of循环可以自动遍历 Generator 函数时生成的Iterator对象

let generator = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};

let g = generator();

// 因为g[Symbol.iterator]()===g，即g本身也有遍历器生成函数
// for...of...循环遍历的实际上是g通过本身的遍历器生成函数
for(let i of g){
    console.log(i);
}
