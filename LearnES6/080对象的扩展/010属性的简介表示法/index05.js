// 如果某个方法的值是一个 Generator 函数，前面需要加上星号。
const obj = {
    * m() {
        yield 'hello world';
    },
};