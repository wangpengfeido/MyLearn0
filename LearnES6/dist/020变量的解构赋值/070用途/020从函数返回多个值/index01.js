"use strict";

var _console;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by w1036_000 on 2016/11/30.
 */
function fn() {
  return [1, 2];
}

var _fn = fn(),
    _fn2 = _slicedToArray(_fn, 2),
    a = _fn2[0],
    b = _fn2[1];

(_console = console).log.apply(_console, [a, b]);
//# sourceMappingURL=index01.js.map