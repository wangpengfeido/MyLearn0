"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
var a = {};

//常量只保证地址不变
a.name = 'wang';
console.log(a);

//报错
// a={};

////////////////////////////////////
var b = Object.freeze({});
//严格模式下报错
b.name = "wang";
//# sourceMappingURL=index01.js.map