// 用于将数组指定位置的成员复制到其他位置
// Array.prototype.copyWithin(target, start = 0, end = this.length)
// target复制到的位置，start开始取值位置（包括），end结束取值位置（不包括）
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
arr.copyWithin(1, 4, 6);
console.log(arr);

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
arr2.copyWithin(1, -4, -2);
console.log(arr2);
