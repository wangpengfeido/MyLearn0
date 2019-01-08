// ES5对空位的处理
// forEach(), filter(), reduce(), every() 和some()都会跳过空位。
// map()会跳过空位，但会保留这个值
// join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。


///////////////////////////////////////////
// ES6对空位的处理
// Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。
// 扩展运算符（...）也会将空位转为undefined。
// copyWithin()会连空位一起拷贝。
// fill()会将空位视为正常的数组位置。
// for...of循环也会遍历空位。
// entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。
