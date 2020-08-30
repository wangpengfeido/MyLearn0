// 先将数组排序
// 从小到大遍历第一二个数，从大到小遍历第三个数，也就是说，第二三个数的遍历是同时的
// 在取数时，要保证下一次遍历与上一次遍历取到的数不同，这就保证的结果的不重复

// 时间复杂度 O(N^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let ans = [];
  for (let first = 0; first < nums.length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    const target = -nums[first];
    for (
      let second = first + 1, third = nums.length - 1;
      second < nums.length;
      second++
    ) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }

      while (second < third && nums[second] + nums[third] > target) {
        third--;
      }
      if (second >= third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        ans.push([nums[first], nums[second], nums[third]]);
      }
    }
  }

  return ans;
};

console.log([-1, 0, 1, 2, -1, -4], threeSum([-1, 0, 1, 2, -1, -4]));
console.log(
  [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
  threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
);


