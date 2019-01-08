// 默认的 Iterator 接口部署在数据结构的Symbol.iterator属性
// Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。
let obj = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                if (index < 10) {
                    return {value: index++, done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
};
for (let i of obj) {
    console.log(i);
}

// 如果Symbol.iterator不是遍历器生成函数将报错


let iter = obj[Symbol.iterator]();

