function f() {
    console.log('I am outside');
}

(function () {
    if (false) {
        // 如果一定要在块级作用域内声明函数，应该使用函数表达式
        let f = function () {
            console.log('I am inside');
        }
    }
    f(); // es6:outside
}());