"use strict";

/**
 * Created by w1036_000 on 2016/12/2.
 */
//Object.assign实行的是浅拷贝
var obj1 = { a: { b: 1 } };
var obj2 = Object.assign({}, obj1);
obj1.a.b = 10;
console.log(obj2.a.b);
//////////////////////////////////////////
var target = { a: { b: 1, c: 1 } };
var source = { a: { c: 2, d: 2 } };
console.log(Object.assign(target, source));
//# sourceMappingURL=index01.js.map