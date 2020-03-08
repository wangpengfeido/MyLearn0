declare function require(moduleName: string): any;

// 这里是动态加载模块的过程。
// 注意：require是commonjs的动态加载，采用何种方式要根据编译目标决定

// 由于只使用了Test的类型，所以这一句导入被忽略
import { Test } from './test';
if (1 + 1 === 2) {
  // commonjs的动态模块导入
  let _Test: typeof Test = require('./test');
  let t = new _Test(10);
  console.log(t.a);
}


