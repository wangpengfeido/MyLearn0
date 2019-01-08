/**
 * Created by w1036_000 on 2016/11/30.
 */
//es6中全局声明的let/const/class变量不再属于顶层对象
let a=1;
console.log(global.a);

//对照////////////////////////////////
var b=1;
console.log(global.b);


