/**
 * 折半查找
 */
exports.binarySearch = function(sortedArr, target) {
  let left = 0,
    right = sortedArr.length - 1;
  while (left <= right) {
    const middle = parseInt((left + right) / 2);
    if (target < sortedArr[middle]) {
      right = middle;
    } else if (target > sortedArr[middle]) {
      left = middle;
    } else {
      return middle;
    }
  }
};
