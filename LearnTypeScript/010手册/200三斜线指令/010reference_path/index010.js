var N010200010_test1;
(function (N010200010_test1) {
    N010200010_test1.a = 0;
})(N010200010_test1 || (N010200010_test1 = {}));
var N010200010_test1;
(function (N010200010_test1) {
    N010200010_test1.b = 1;
})(N010200010_test1 || (N010200010_test1 = {}));
/// <reference path='./test.ts'/>
/// <reference path='./test02.ts'/>
console.log(N010200010_test1.a);
console.log(N010200010_test1.b);
//三斜线指令必须放在文件的最顶端
//<reference path="..." />指令告诉编译过程中额外引入的文件
//如果使用--noResolve选项，它将被忽略
