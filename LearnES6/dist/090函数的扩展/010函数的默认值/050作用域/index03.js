'use strict';

/**
 * Created by w1036_000 on 2016/11/30.
 */
var foo = 'outer';
function f() {
  var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
    return foo;
  };

  var foo = 'inner';
  console.log(fun());
}
f();
//# sourceMappingURL=index03.js.map