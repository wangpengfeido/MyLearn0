"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by w1036_000 on 2016/11/30.
 */
var _hello = "hello",
    _hello2 = _slicedToArray(_hello, 3),
    a1 = _hello2[0],
    b1 = _hello2[1],
    c1 = _hello2[2];

console.log(a1, b1, c1);
/////////////////////////////////
var _hello3 = 'hello',
    a = _hello3[0],
    b = _hello3[2],
    c = _hello3.length;

console.log(a, b, c);
//# sourceMappingURL=index01.js.map