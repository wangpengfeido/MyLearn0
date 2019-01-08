"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
function fn() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  console.log(x, y, z);
}
fn();
fn(undefined, 20);
fn(null, 20);
//报错
// fn(,20);
//# sourceMappingURL=index01.js.map