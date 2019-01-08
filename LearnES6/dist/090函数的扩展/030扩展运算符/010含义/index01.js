"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
function add(x, y) {
    return x + y;
}
console.log(add.apply(undefined, [1, 1]));
////////////////////////////////////////
function add2(a, b, c, d, e) {
    return a + b + c + d + e;
}
console.log(add2.apply(undefined, [1].concat([1, 1], [1], [1])));
//# sourceMappingURL=index01.js.map