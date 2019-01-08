'use strict';

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by w1036_000 on 2016/12/2.
 */
//simbol必须使用方括号
var s = Symbol();
var obj = (_obj = {}, _defineProperty(_obj, s, 'hello'), _defineProperty(_obj, 's', 'hi'), _obj);
console.log(obj[s]);
console.log(obj.s);
console.log(obj['s']);
//# sourceMappingURL=index01.js.map