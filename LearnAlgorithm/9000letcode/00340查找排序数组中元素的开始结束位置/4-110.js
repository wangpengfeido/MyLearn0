// 利用二分查找
// 如果 middle值>target ，则在middle右侧查找
// 如果 middle值<target ，则在middle左侧查找
// 如果 middle值=target
//     如果middle不是起始值，在middle左侧查找起始值。如果middle不是结束值，在middle右侧查找结束值

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function recursion(
    nums,
    left,
    right,
    target,
    needStart = true,
    needEnd = true
  ) {
    if (left === right) {
      return nums[left] === target ? [left, left] : [-1, -1];
    } else if (left > right) {
      return [-1, -1];
    }

    let startIndex = -1,
      endIndex = -1;
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      if (needStart) {
        if (nums[middle - 1] !== target) {
          startIndex = middle;
        } else {
          startIndex = recursion(
            nums,
            left,
            middle - 1,
            target,
            true,
            false
          )[0];
        }
      }
      if (needEnd) {
        if (nums[middle + 1] !== target) {
          endIndex = middle;
        } else {
          endIndex = recursion(nums, middle + 1, right, target, false, true)[1];
        }
      }
    } else if (nums[middle] > target) {
      [startIndex, endIndex] = recursion(
        nums,
        left,
        middle - 1,
        target,
        needStart,
        needEnd
      );
    } else {
      [startIndex, endIndex] = recursion(
        nums,
        middle + 1,
        right,
        target,
        needStart,
        needEnd
      );
    }
    return [startIndex, endIndex];
  }

  if (!nums.length) {
    return [-1, -1];
  }
  return recursion(nums, 0, nums.length - 1, target);
};

console.log([5, 7, 7, 8, 8, 10], 8, searchRange([5, 7, 7, 8, 8, 10], 8));
console.log([5, 7, 7, 8, 8, 10], 6, searchRange([5, 7, 7, 8, 8, 10], 6));
console.log([], 0, searchRange([], 0));
console.log([1], 1, searchRange([1], 1));
console.log([1, 2], 2, searchRange([1, 2], 2));
console.log([2, 2], 1, searchRange([2, 2], 1));
console.log([2, 2], 2, searchRange([2, 2], 2));
