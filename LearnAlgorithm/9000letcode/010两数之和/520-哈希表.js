// 使用哈希表，将第二层遍历转换为哈希表查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map(nums.map((num, index) => [num, index]));
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    // map.get(otherNum) !== i可以保证两次取数不会取到同一个数
    if (map.has(otherNum) && map.get(otherNum) !== i) {
      return [i, map.get(otherNum)];
    }
  }
};

let nums = [2, 7, 11, 5];
console.log(twoSum(nums, 9));
