// 使用二分法


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums.length) {
    return 0;
  }

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      if (nums[middle - 1] === undefined || nums[middle - 1] < target) {
        return middle;
      } else {
        right = middle - 1;
      }
    } else {
      if (nums[middle + 1] === undefined || nums[middle + 1] > target) {
        return middle + 1;
      } else {
        left = middle + 1;
      }
    }
  }
};

console.log([1, 3, 5, 6], 5, searchInsert([1, 3, 5, 6], 5));
console.log([1, 3, 5, 6], 2, searchInsert([1, 3, 5, 6], 2));
console.log([1, 3, 5, 6], 7, searchInsert([1, 3, 5, 6], 7));
console.log([1, 3, 5, 6], 0, searchInsert([1, 3, 5, 6], 0));
console.log([1], 0, searchInsert([1], 0));
console.log([1], 2, searchInsert([1], 2));
console.log([], 0, searchInsert([], 0));
