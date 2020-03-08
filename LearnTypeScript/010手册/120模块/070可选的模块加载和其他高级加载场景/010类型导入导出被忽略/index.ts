// 只导入了Test类型，在编译好的文件中实际不会导入任何文件
import { Test } from './test'

const t: Test = {
  a: 1
};

console.log(t.a);
