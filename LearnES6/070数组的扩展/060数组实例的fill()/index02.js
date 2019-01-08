// fill是浅复制
let obj = {value: 1};
let arr = [1, 2, 3, 4, 5];
arr.fill(obj);
console.log(arr);
obj.value = 2;
console.log(arr);