// 使用立即执行的函数表达式时，可以利用 void 将 function 识别为函数表达式而不是函数声明
void function fn() {
  console.log("fff");
}();

// wpf 注：虽然我们一般是这么使用
(function fn() {
  console.log("fff");
})();

// 或这么使用
(function fn() {
  console.log("fff");
}());

