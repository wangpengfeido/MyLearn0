/**
 * Created by w1036_000 on 2016/11/28.
 */
var x=1;
function foo(x,y=function () {x=2;}) {
    // var x=3;
    x=3;
    y();
    console.log(x);
}
foo();