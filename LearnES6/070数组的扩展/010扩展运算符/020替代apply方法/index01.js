// 不再需要使用apply为一个函数传参数数组
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);
console.log(Math.max(...arr1));