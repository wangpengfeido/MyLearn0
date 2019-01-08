"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by w1036_000 on 2016/11/30.
 */
var _a0$a1$a = { a0: 0, a1: 1, a2: 2 },
    a1 = _a0$a1$a.a1,
    a2 = _a0$a1$a.a2;
//////////////////////////////////////////////

var _b1$b = { b1: 1, b2: 2 },
    ab1 = _b1$b.b1,
    ab2 = _b1$b.b2;
///////////////////////////////////////////

var _c1$c2$c3$c4$c = {
    c1: 1,
    c2: [2, 3, 4],
    c3: 3,
    c4: null,
    c5: undefined
},
    c1 = _c1$c2$c3$c4$c.c1,
    _c1$c2$c3$c4$c$c = _slicedToArray(_c1$c2$c3$c4$c.c2, 1),
    c2 = _c1$c2$c3$c4$c$c[0],
    c3 = _c1$c2$c3$c4$c.c3,
    _c1$c2$c3$c4$c$c2 = _c1$c2$c3$c4$c.c4,
    c4 = _c1$c2$c3$c4$c$c2 === undefined ? 4 : _c1$c2$c3$c4$c$c2,
    _c1$c2$c3$c4$c$c3 = _c1$c2$c3$c4$c.c5,
    c5 = _c1$c2$c3$c4$c$c3 === undefined ? 5 : _c1$c2$c3$c4$c$c3,
    _c1$c2$c3$c4$c$c4 = _c1$c2$c3$c4$c.c6,
    c6 = _c1$c2$c3$c4$c$c4 === undefined ? 6 : _c1$c2$c3$c4$c$c4;

console.log(c1, c2, c3, c4, c5, c6);
//////////////////////////////////////
var _ref = [1, 2],
    d1 = _ref[0],
    d2 = _ref[1];

console.log(d1, d2);
///////////////////////////////////////////////
var log = Math.log,
    sin = Math.sin,
    cos = Math.cos;
//# sourceMappingURL=index01.js.map