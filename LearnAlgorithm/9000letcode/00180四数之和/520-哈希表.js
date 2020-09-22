/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  return kSum(nums, target, 0, 4);
};

/**
 * @param nums 升序数组
 * @param start 查找的开始位置
 * @param k k数之和
 */
function kSum(nums, target, start, k) {
  if (start === nums.length) {
    return [];
  }
  if (k === 2) {
    return twoSum(nums, target, start);
  }

  let ans = [];
  for (let i = start; i < nums.length; i++) {
    // 防止重复取值
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    const next = kSum(nums, target - nums[i], i + 1, k - 1);
    next.forEach((item) => {
      ans.push([nums[i], ...item]);
    });
  }
  return ans;
}

function twoSum(nums, target, start) {
  let ans = [];
  let set = new Set();
  for (let i = start; i < nums.length; i++) {
    // 判断结果是否已存在
    // 因为 nums 是排序过的，所以我们只需要检查结果集中的最后一个结果的一个数字即可
    if (!ans.length || ans[ans.length - 1][1] !== nums[i]) {
      if (set.has(target - nums[i])) {
        ans.push([target - nums[i], nums[i]]);
      }
      set.add(nums[i]);
    }
  }

  return ans;
}

console.log([1, 0, -1, 0, -2, 2], 0, fourSum([1, 0, -1, 0, -2, 2], 0));
