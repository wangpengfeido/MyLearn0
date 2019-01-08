"use strict";

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by w1036_000 on 2016/12/2.
 */
//set不添加重复值
var s = new Set();
[2, 3, 4, 5, 2, 2].forEach(function (item) {
  s.add(item);
});
console.log(s);
//////////////////////////////////////////
var s2 = new Set([1, 2, 3, 4, 4, 5]);
console.log(s2);
console.log(s2.size);
(_console = console).log.apply(_console, _toConsumableArray(s2));
//数组去重///////////////////////////////////
console.log([].concat(_toConsumableArray(new Set([1, 1, 2, 2]))));
//# sourceMappingURL=index01.js.map