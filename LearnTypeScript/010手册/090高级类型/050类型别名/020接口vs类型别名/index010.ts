// 1. 接口可以被 extends 和 implements 扩展

interface Animal1 {
  name: string;
}

// 接口可以被扩展
interface Bear1 extends Animal1 {
  honey: boolean;
}

// ---------

type Animal2 = { name: string };

// 类型别名只能使用交叉类型
type Bear2 = Animal2 & { honey: true };

///////////////////////////////////////////////////
// 2. 接口可以被 re-open

interface Bird1 {
  name: string;
}

// reopen 接口并增加了属性
interface Bird1 {
  wing: boolean;
}

let b1: Bird1 = { name: "sam", wing: true };

// --------

type Bird2 = { name: string };

// 不允许：类型重新定义
// type Bird2 = { wing: boolean };
