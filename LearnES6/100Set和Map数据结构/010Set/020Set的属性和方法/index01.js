// Set.prototype.constructor：构造函数，默认就是Set函数。
console.log(new Set([]).constructor === Set);

// Set.prototype.size：返回Set实例的成员总数。
console.log(new Set([1, 2, 2, 3]).size);
