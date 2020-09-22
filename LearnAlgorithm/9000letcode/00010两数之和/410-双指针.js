// 这个解法思路是：
// 先将数组排序
// 然后分别从排序数组的开始和结尾向中间查找

// 这种方式的时间复杂度时O(nlogn)，因为受排序限制，并不是很理想
// 但是如果数组一开始就是排好序的，可以采用这种方式。见01670
// 而且，这种方式也是寻找三或更多数之和的一种思想

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let sortedNums = Array.from(nums).sort((a, b) => a - b);
  let i = 0,
    j = sortedNums.length - 1;
  while (i < j) {
    let sum = sortedNums[i] + sortedNums[j];
    if (sum === target) {
      return [nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[j])];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
};

let nums = [2, 7, 11, 5];
console.log(twoSum(nums, 9));
