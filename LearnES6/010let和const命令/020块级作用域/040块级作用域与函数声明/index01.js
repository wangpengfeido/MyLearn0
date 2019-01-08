/**
 * Created by w1036_000 on 2016/11/29.
 */
function f() {
    console.log('I am outside');
}
(function () {
    if(false){
        // es6允许在块级作用域中声明函数，函数的作用域为块级作用域
        function f() {
            console.log('I am inside');
        }
    }
    f();//结果：ES5:inside;ES6:报错    因为为了兼容es5，环境有不同实现方式，因此尽量减少在块级作用域内声明函数
}());