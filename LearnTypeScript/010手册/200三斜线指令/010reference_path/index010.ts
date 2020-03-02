//(命令：tsc .\index010.ts --outFile index010.js)
//(命令：tsc .\index010.ts)

// 三斜线指令必须放在文件的最顶端
// 三斜线引用路径是相对于包含它的文件的
// 如果使用--noResolve选项，它将被忽略

// <reference path="xxx">指令
// 不使用--outFile：告诉编译过程中额外引入的文件（只有声明文件的作用，并不做实际引入）
// 使用--outFile：引入文件并控制文件引入顺序。所谓的引入文件仅仅是编译后代码的直接复制。
// 它与import的区别：import是模块（带export）的引入;reference_path是文件的引入（不管带不带export）

/// <reference path='./test.ts'/>
/// <reference path='./test02.ts'/>
console.log(N010200010_test1.a);
console.log(N010200010_test1.b);


