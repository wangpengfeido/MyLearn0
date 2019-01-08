// 利用 Generator 函数，可以在任意对象上部署 Iterator 接口。
let iterEntries = function* (obj) {
    let keys = Reflect.ownKeys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        yield [key, obj[key]];
    }
};
let obj = {a: 'aaa', b: 'bbb'};
for(let [key,value] of iterEntries(obj)){
    console.log(key,value);
}



