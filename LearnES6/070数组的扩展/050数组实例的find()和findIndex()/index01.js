let str = ['a', 'b', 'c', 'd'];

// find和findIndex，查找数组元素。 回调函数有三个参数，成员，位置，原数组。
console.log(str.find((item, index, arr) => item === 'b'));
console.log(str.findIndex((item, index, arr) => item === 'b'));

// find和findIndex可以指定回调函数的this对象
console.log(str.find(function (item) {
    return item === this.value;
}, {value: 'b'}));