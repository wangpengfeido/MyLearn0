var x = 1;

// 这里函数执行的x=2是参数作用域中的x，即第一个参数x
function foo(x, y = function () { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}

foo(); // 3
console.log(x); // 1