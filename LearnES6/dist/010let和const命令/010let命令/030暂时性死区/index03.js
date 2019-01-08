"use strict";

/**
 * Created by w1036_000 on 2016/11/29.
 */
function fn1() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    return [x, y];
}
console.log(fn1());
//////////////////////////////////////////////
function fn() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : y;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return [x, y];
}
fn();
////////////////////////////////////////////
//# sourceMappingURL=index03.js.map