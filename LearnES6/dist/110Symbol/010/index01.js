"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by w1036_000 on 2016/11/28.
 */
var s = Symbol("foo");
console.log(typeof s === "undefined" ? "undefined" : _typeof(s));
console.log(s);
//参数如果是对象调用toString方法/////////////////
console.log(Symbol({
    name: 'a',
    toString: function toString() {
        return this.name;
    }
}));
//////////////////////////////////////
console.log(s.toString());
console.log(Boolean(s));
//# sourceMappingURL=index01.js.map