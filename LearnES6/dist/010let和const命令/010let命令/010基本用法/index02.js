"use strict";

/**
 * Created by w1036_000 on 2016/11/29.
 */
for (var _i = 0; _i < 10; _i++) {}
console.log(i);

//////////////////////////////////////
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
////
var b = [];

var _loop = function _loop(j) {
    b[j] = function () {
        console.log(j);
    };
};

for (var j = 0; j < 10; j++) {
    _loop(j);
}
b[6]();
//# sourceMappingURL=index01.js.map