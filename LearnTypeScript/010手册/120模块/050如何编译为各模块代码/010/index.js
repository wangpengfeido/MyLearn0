// (命令：tsc ./index.ts --module CommonJS)
// (命令：tsc ./index.ts --module ES6)
// (命令：tsc ./index.ts --module UMD)
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./test", "./test"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var test_1 = require("./test");
    var test_2 = require("./test");
    console.log(test_1.a);
    console.log(test_2["default"]);
});
