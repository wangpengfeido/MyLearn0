// （命令：tsc .\index.ts --types ./test ）

import { a } from './test';
function myConsole(content: number) {
  console.log(content);
}
myConsole(a);
