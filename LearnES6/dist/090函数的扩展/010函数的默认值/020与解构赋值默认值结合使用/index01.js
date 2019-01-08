'use strict';

/**
 * Created by w1036_000 on 2016/11/30.
 */
//双重默认值
function say() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 'hello' : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 'world' : _ref$y;

  console.log(x, y);
}
say();
say({ x: 'hi' });
say({ y: 'china' });
//# sourceMappingURL=index01.js.map