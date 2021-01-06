// 使用二分查找两次查找数组。一次找出起始值，一次找出结束值。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let startIndex = searchOneIndex(nums, target, true);
  if (startIndex === -1) {
    return [-1, -1];
  }
  let endIndex = searchOneIndex(nums, target, false);
  return [startIndex, endIndex];
};

// 查找开始或结束点
function searchOneIndex(nums, target, isStart) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (left > right) {
      return -1;
    }
    if (nums[middle] === target) {
      if (isStart) {
        if (nums[middle - 1] !== target) {
          return middle;
        } else {
          right = middle - 1;
        }
      } else {
        if (nums[middle + 1] !== target) {
          return middle;
        } else {
          left = middle + 1;
        }
      }
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log([5, 7, 7, 8, 8, 10], 8, searchRange([5, 7, 7, 8, 8, 10], 8));
console.log([5, 7, 7, 8, 8, 10], 6, searchRange([5, 7, 7, 8, 8, 10], 6));
console.log([], 0, searchRange([], 0));
console.log([1], 1, searchRange([1], 1));
console.log([1, 2], 2, searchRange([1, 2], 2));
console.log([2, 2], 1, searchRange([2, 2], 1));
console.log([2, 2], 2, searchRange([2, 2], 2));
