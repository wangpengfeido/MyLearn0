const someDom = {};

function doSth() {
  return "aaa";
}

// onclick 预期是一个没有返回值的函数，如果有返回值会导致非预期的副作用
// 如果使用直接返回值的箭头函数，可以在返回值前面加void，保证没有返回值
someDom.onclick = () => void doSth();
