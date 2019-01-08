"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
//函数length属性返回指定默认值前的参数个数
function f(a, b) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var d = arguments[3];
}
console.log(f.length);
//# sourceMappingURL=index01.js.map