// 实例：使用Generator实现对象的遍历
function* objectGenerator(obj) {
    let propKeys = Reflect.ownKeys(obj);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let obj = {a: 1, b: 2, c: 3};

for (let [key, value] of objectGenerator(obj)) {
    console.log(key, value);
}

// 或者将 Generator 函数加到对象的Symbol.iterator属性上面
function* objectGenerator2() {
    let propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

let obj2 = {
    a: 1, b: 2, c: 3,
    [Symbol.iterator]:objectGenerator2,
};
for(let [key,value] of obj2){
      console.log(key, value);
}

// 其他使用遍历器接口的操作都可以这样做
console.log(...obj2);
console.log(Array.from(obj2));

