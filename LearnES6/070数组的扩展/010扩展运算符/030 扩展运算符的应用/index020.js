//与解构赋值结合
let arr = [1, 2, 3, 4, 5, 6, 7];
let first;
let second;
let third;
[first, ...second] = arr;
console.log(first, second);
/////////////////////////////////////////////////
//报错，只能放在最后一个
// [first,...second,third]=arr;