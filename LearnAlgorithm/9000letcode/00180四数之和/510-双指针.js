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
  let first = start,
    second = nums.length - 1;
  while (first < second) {
    const sum = nums[first] + nums[second];
    // 防止重复取值
    if (first > start && nums[first] === nums[first - 1]) {
      first++;
      continue;
    }
    if (sum === target) {
      ans.push([nums[first], nums[second]]);
      first++;
      second--;
    } else if (sum < target) {
      first++;
    } else {
      second--;
    }
  }
  return ans;
}

console.log([1, 0, -1, 0, -2, 2], 0, fourSum([1, 0, -1, 0, -2, 2], 0));
