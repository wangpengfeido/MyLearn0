// ...用于获取多余参数，将多余参数组合为数组
const sortNumbers = (...values) => values.sort(function (a,b){return a-b});
console.log(sortNumbers(1, 56, 21, 5));

// 与arguments相比的优点，
// arguments是伪数组，必须使用Array.prototype.slice.call将其转换为真正的数组，
// 而rest参数是真正的数组
