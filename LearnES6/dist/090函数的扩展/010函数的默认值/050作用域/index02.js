"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
var x = 1;
function f() {
  var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
  return function () {
    var x = 2;
    console.log(y);
  }();
}
f();
//# sourceMappingURL=index02.js.map