// Map是比Object更完善的Hash实现，它可以把对象当作键

let obj = {g: 'ggg'};

// Map可以接受“具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构”来初始化
let m = new Map([['a', 1], ['b', 2], [obj, 999]]);
console.log(m);

// 所以，Map和Set都可以生成新的Map
console.log(new Map(new Set([['a', 1], ['b', 2]])));

// 如果对同一个键多次赋值，将覆盖前面的值
m.set('a', 100);
console.log(m);

// 如果读取一个未知的键，则返回undefined。
console.log(m.get('x'));

// 存储的对象为引用。只有地址相同才会判断相同。
console.log(m.get(obj));
console.log(m.get({g: 'ggg'}));



