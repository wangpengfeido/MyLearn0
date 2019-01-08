// 尾递归优化只有在严格模式下才有用
// 因为严格模式不能使用func.arguments和func.caller，而这两个变量会在调用栈被改写时失真