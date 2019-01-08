// 如果方法名是Symbol，那么name返回Symbol的描述
let symbol = Symbol('aaa');
let obj = {
    [symbol]: function () {},
};
console.log(obj[symbol].name);