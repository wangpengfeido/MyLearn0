"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
//与解构赋值结合
var arr = [1, 2, 3, 4, 5, 6, 7];
var first = void 0;
var second = void 0;
var third = void 0;
first = arr[0];
second = arr.slice(1);

console.log(first, second);
/////////////////////////////////////////////////
//报错，只能放在最后一个
// [first,...second,third]=arr;
//# sourceMappingURL=index02.js.map