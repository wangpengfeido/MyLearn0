"use strict";
var test = {
    a: 1
};
// 报错：当定义了 "export =" 以后，不能再定义其他的export语句
exports.b = 2;
module.exports = test;
