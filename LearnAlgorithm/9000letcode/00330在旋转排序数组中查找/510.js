// 在 110.js 的基础上进一步简化逻辑

// 同样进行二分查找。
// middle 将数组分成两部分，
//   如果其中一部分为升序，并且target在这一部分范围内，则在这一部分内查找
//   否则在另一部分内查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > nums[left]) {
      if (target >= nums[left] && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target >= nums[middle + 1] && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

console.log([4, 5, 6, 7, 0, 1, 2], 0, search([4, 5, 6, 7, 0, 1, 2], 0));
console.log([4, 5, 6, 7, 8, 1, 2, 3], 8, search([4, 5, 6, 7, 8, 1, 2, 3], 8));
console.log([4, 5, 6, 7, 0, 1, 2], 3, search([4, 5, 6, 7, 0, 1, 2], 3));
console.log([1], 0, search([1], 0));
console.log([1], 1, search([1], 1));
console.log([1, 3], 1, search([1, 3], 1));
console.log([1, 3], 3, search([1, 3], 3));
console.log([3, 1], 1, search([3, 1], 1));
