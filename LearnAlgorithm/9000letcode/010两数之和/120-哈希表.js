/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map(nums.map((num, index) => [num, index]));
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    if (map.has(otherNum) && map.get(otherNum) !== i) {
      return [i, map.get(otherNum)];
    }
  }
};

let nums = [2, 7, 11, 5];
console.log(twoSum(nums, 9));
