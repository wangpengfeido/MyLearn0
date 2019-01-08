/**
 * Created by w1036_000 on 2016/11/29.
 */
// 使用var时，变量提升覆盖外层变量
var a=1;
function f() {
    console.log(a);
    if(false){
        var a=2;
    }
}
f();