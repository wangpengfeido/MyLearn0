// 如果 Generator 函数内部有try...finally代码块
// 那么generator内会跳到finally代码块，并且return方法会推迟到finally代码块执行完再执行。

let generator = function* () {
    try{
        yield 'a';
        yield 'b';
    }finally {
        yield 'c';
        yield 'd';
    }


};

let g = generator();
console.log(g.next());
console.log(g.return('z'));
console.log(g.next());
console.log(g.next());


