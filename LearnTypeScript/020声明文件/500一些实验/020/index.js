"use strict";
// （命令：tsc .\index.ts --types ./test ）
exports.__esModule = true;
var test_1 = require("./test");
function myConsole(content) {
    console.log(content);
}
myConsole(test_1.a);
