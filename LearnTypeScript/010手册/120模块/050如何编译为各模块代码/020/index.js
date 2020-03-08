// (命令：tsc ./index.ts --module CommonJS)
// (命令：tsc ./index.ts --module ES6)
// (命令：tsc ./index.ts --module UMD)
// import test = require('./test');
import * as test from './test';
console.log(test.a);
