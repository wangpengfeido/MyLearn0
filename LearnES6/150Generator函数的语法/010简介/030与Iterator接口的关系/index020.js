let generator = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};

let g = generator();

// generator生成的遍历器也带有遍历器生成函数，会返回遍历器本身
console.log(g[Symbol.iterator]() === g);