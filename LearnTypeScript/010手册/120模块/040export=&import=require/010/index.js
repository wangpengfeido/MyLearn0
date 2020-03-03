"use strict";
// "export ="导出必须用"import = require"导入
// 在编译为commonjs时，它被编译为"var test=require"语法
// import test = require('./test');
// console.log(test.a);
exports.__esModule = true;
var test_1 = require("./test");
console.log(test_1.a);
