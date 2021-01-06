// 先通过二分查找找出枢纽点。然后再在枢纽分开的target所在的部分进行二分查找。

// 时间复杂度 O(logn)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums[nums.length - 1] > nums[0]) {
    return binarySearch(nums, 0, nums.length - 1, target);
  } else {
    const pivot = findPivot(nums);
    if (target === nums[nums.length - 1]) {
      return nums.length - 1;
    } else if (target < nums[nums.length - 1]) {
      return binarySearch(nums, pivot + 1, nums.length - 2, target);
    } else {
      return binarySearch(nums, 0, pivot, target);
    }
  }
};

// 找到数组旋转后，第一段的结束索引
function findPivot(nums) {
  let left = 0,
    right = nums.length - 1;

  // 没有旋转的情况
  if (nums[right] > nums[left]) {
    return right;
  }

  // 二分查找
  while (true) {
    if (left === right) {
      return left;
    }
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < nums[0]) {
      right = middle - 1;
    } else if (nums[middle + 1] > nums[nums.length - 1]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
}

// 二分查找
function binarySearch(nums, left, right, target) {
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    }
  }
  return -1;
}

console.log([4, 5, 6, 7, 0, 1, 2], 0, search([4, 5, 6, 7, 0, 1, 2], 0));
console.log([4, 5, 6, 7, 8, 1, 2, 3], 8, search([4, 5, 6, 7, 8, 1, 2, 3], 8));
console.log([4, 5, 6, 7, 0, 1, 2], 3, search([4, 5, 6, 7, 0, 1, 2], 3));
console.log([1], 0, search([1], 0));
console.log([1], 1, search([1], 1));
console.log([1, 3], 1, search([1, 3], 1));
