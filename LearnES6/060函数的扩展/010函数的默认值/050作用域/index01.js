/**
 * Created by w1036_000 on 2016/11/30.
 */
var x=1;
// 函数在声明时形成单独的参数作用域
function f(x, y = x) {
    console.log(y);
}
f(2);  // 2






