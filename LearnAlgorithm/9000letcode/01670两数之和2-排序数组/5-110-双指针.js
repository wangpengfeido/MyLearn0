// 时间复杂度 O(n)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let first = 0,
    second = numbers.length - 1;
  while (first < second) {
    const sum = numbers[first] + numbers[second];
    if (sum === target) {
      return [first + 1, second + 1];
    } else if (sum < target) {
      first++;
    } else {
      second--;
    }
  }
};

console.log([2, 7, 11, 15], 9, twoSum([2, 7, 11, 15], 9));
console.log([2, 3, 4], 6, twoSum([2, 3, 4], 6));
console.log([-1, 0], -1, twoSum([-1, 0], -1));
