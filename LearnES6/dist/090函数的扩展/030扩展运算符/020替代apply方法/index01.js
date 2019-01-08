"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1);
console.log(Math.max.apply(Math, arr1));
//# sourceMappingURL=index01.js.map