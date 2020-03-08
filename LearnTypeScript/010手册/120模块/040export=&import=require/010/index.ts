// "export ="导出必须用"import = require"导入
// 在编译为commonjs时，它被编译为"var test=require"语法
import test = require('./test');
console.log(test.a);

// 注意：在导出为ES6模块时，不支持"export ="和"import xxx = require()"语法
