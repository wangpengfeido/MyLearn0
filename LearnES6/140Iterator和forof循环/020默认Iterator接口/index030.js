// 技巧：对于类似数组的对象，可以直接引用数组的Iterator接口
let obj = {
    0: 'a', 1: 'b', 2: 'c',
    length: 3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator],
};

for(let i of obj){
    console.log(i);
}




