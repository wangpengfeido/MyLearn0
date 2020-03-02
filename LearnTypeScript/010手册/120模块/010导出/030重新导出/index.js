"use strict";
//（命令：tsc ./index.ts）
// 这个命令会将入口和子模块分别打包，并生成commonjs模块（可通过--module命令配置）
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
//重新导出
//重命名
var index030_1_1 = require("./index030_1");
exports.a = index030_1_1.i;
// 重新导出包含多个模块的模块
__export(require("./index030_1"));
__export(require("./index030_2"));
