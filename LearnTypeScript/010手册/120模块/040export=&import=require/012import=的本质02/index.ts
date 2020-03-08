// 普通export导出，也可以由"import xxx = require()"语句导入
import test = require('./test');
console.log(test.a);


// 实际上，"import xxx = require()"语句与"import * as xxx from "语句的作用类似
