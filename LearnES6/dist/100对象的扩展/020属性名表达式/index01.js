'use strict';

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by w1036_000 on 2016/12/2.
 */
//es6中属性名定义允许使用表达式
var b = 'b';
var c = 'c';
var obj = (_obj = {}, _defineProperty(_obj, 'a' + b, "ab"), _defineProperty(_obj, c, function () {
    return 'ccc';
}), _obj);
console.log(obj);
console.log(obj.c());
//# sourceMappingURL=index01.js.map