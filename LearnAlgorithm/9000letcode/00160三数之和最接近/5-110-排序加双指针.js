// 从 ./150 得到启发

// 先将数组排序
// 从小到大遍历第一二个数，从大到小遍历第三个数，也就是说，第二三个数的遍历是同步进行的
// 每次遍历，检查三数之和是否比已得到的数更接近目标
//     如果比目标小，则第二个数右移
//     如果比目标大，则第三个数左移
//     如果等于目标，计算结束

// 时间复杂度 O(N^2)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let ans = Infinity;
  for (let first = 0; first < nums.length; first++) {
    let second = first + 1,
      third = nums.length - 1;
    while (second < third) {
      const sum = nums[first] + nums[second] + nums[third] - target;
      if (Math.abs(sum) < Math.abs(ans - target)) {
        ans = nums[first] + nums[second] + nums[third];
      }
      if (sum < 0) {
        second++;
      } else if (sum > 0) {
        third--;
      } else {
        return ans;
      }
    }
  }

  return ans;
};

console.log([-1, 2, 1, -4], 1, threeSumClosest([-1, 2, 1, -4], 1));
console.log(
  [1, 2, 4, 8, 16, 32, 64, 128],
  82,
  threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)
);
