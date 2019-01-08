"use strict";

/**
 * Created by w1036_000 on 2016/11/30.
 */
//报错，rest参数必须是最后一个
// let fn1=(a,...b,c)=>{};
///////////////////////////////////////////
//    rest参数不计入length属性
var fn2 = function fn2(a, b) {};
console.log(fn2.length);
//# sourceMappingURL=index02.js.map