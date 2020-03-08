// (命令：tsc ./index.ts --module CommonJS)
// (命令：tsc ./index.ts --module ES6)
// (命令：tsc ./index.ts --module UMD)

import { a } from './test';
import test from './test';

console.log(a);
console.log(test);