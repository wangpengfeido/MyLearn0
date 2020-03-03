const test = {
  a: 1,
};

// 为了兼容commonjs和amd的exports，提供了 "export =" 语法
// 注：在编译commonjs时，它被编译为 "module.exports=" 语法
export = test;
