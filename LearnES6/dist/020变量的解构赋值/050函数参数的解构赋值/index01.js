"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
function fn() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 1 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 2 : _ref$y;

  console.log(x, y);
}
fn({ x: 3, y: 4 });
fn({ x: 3 });
fn();
//# sourceMappingURL=index01.js.map