let s = new Set([1, 2, 3]);

// add(value)：添加某个值，返回 Set 结构本身。
console.log(s.add(10), s);

// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
console.log(s.delete(10), s);

// has(value)：返回一个布尔值，表示该值是否为Set的成员。
console.log(s.has(2), s);

// clear()：清除所有成员，没有返回值。
console.log(s.clear(), s);

//Array.from方法可以将 Set 结构转为数组。
