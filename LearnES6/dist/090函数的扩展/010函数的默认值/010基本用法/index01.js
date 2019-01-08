'use strict';

/**
 * Created by w1036_000 on 2016/11/30.
 */
function say() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello';
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

  console.log(x, y);
}
say();
say('hi');
//# sourceMappingURL=index01.js.map