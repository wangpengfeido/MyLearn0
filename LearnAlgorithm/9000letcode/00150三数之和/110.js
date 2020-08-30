// 依次遍历前两个数，第三个数通过哈希表找出
// 每次找出符合条件的数，拼凑出一个每种结果对应的唯一字符串与之一起保存，来检查结果中没有重复。

// 缺点是明显的：检查无重复结果的消耗太大，包括时间上和空间上。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let numsHash = {};
  nums.forEach((num, index) => {
    if (!numsHash[num]) {
      numsHash[num] = [index];
    } else {
      numsHash[num].push(index);
    }
  });

  let ans = [],
    existAnsStr = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const thirdNum = 0 - nums[i] - nums[j];
      const thirdNumIndexes = numsHash[thirdNum] || [];
      thirdNumIndexes.forEach((index) => {
        if (index > j) {
          const newAns = [nums[i], nums[j], thirdNum].sort((a, b) => a - b);
          const newAnsStr = newAns.join("");
          if (!existAnsStr[newAnsStr]) {
            existAnsStr[newAnsStr] = true;
            ans.push(newAns);
          }
        }
      });
    }
  }

  return ans;
};

console.log([-1, 0, 1, 2, -1, -4], threeSum([-1, 0, 1, 2, -1, -4]));
