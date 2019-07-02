// 进一步改进，在遍历过程中set map

// 经测试这种效果并不如先创建效果好

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
