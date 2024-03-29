// ES5中规定，函数内部可以指定严格模式
// ES6规定，只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式
// 这是因为函数参数先于函数体执行，如果在函数体指定严格模式，那么函数参数就不知道是不是严格模式了