function createArr(length) {
  return Array.from({ length }).fill(0);
}

const arrLength = 100000;
const arr1InsertPosition = 10000;
const arr2InsertPosition = 80000;
const insertTime = 10000;

// 创建两个长度相同的数组
const arr1 = createArr(arrLength),
  arr2 = createArr(arrLength);

// 两个数组在不同位置插入元素，并统计时间消耗
let time1Start = Date.now();
for (let i = 0; i < insertTime; i++) {
  arr1.splice(arr1InsertPosition, 0, 1);
}
let time1End = Date.now();
console.log(
  `长度为${arrLength}的数组，在${arr1InsertPosition}处插入${insertTime}次，花费时间为：${
    time1End - time1Start
  }`
);

let time2Start = Date.now();
for (let i = 0; i < insertTime; i++) {
  arr2.splice(arr2InsertPosition, 0, 1);
}
let time2End = Date.now();
console.log(
  `长度为${arrLength}的数组，在${arr2InsertPosition}处插入${insertTime}次，花费时间为：${
    time2End - time2Start
  }`
);

// 结果：
// 在数组前端掺入要远慢于在数组后端插入
// 推断splice操作数组时要将数组元素依次移动

// 假设插入位置为i，数组长度为l，插入一个元素的时间复杂度为 O(l-i)
