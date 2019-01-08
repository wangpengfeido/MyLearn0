/**
 * Created by w1036_000 on 2016/11/30.
 */
let foo = 'outer';

// 在参数作用域中并未定义foo
function f(fun = x => foo) {
    let foo = 'inner';
    console.log(fun());
}

f(); // outer

