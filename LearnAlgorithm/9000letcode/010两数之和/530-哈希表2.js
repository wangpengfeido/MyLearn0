// 进一步改进，在遍历过程中set map
// 时间复杂度为O(n)

// 经测试这种效果相较先创建哈希表相差无几

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    if (map.has(otherNum)) {
      return [map.get(otherNum), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

let nums = [2, 7, 11, 5];
console.log(twoSum(nums, 9));
