"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
var sortNumbers = function sortNumbers() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.sort(function (a, b) {
    return a - b;
  });
};
console.log(sortNumbers(1, 56, 21, 5));
//# sourceMappingURL=index01.js.map