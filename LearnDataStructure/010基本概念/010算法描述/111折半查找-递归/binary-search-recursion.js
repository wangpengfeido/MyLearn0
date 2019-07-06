exports.binarySearchRecusion = function binarySearchRecusion(sortedArr, target, left = 0, right = sortedArr.length - 1) {
  if (left > right) {
    return;
  }
  let middle = parseInt((left + right) / 2);
  if (target < sortedArr[middle]) {
    return binarySearchRecusion(sortedArr, target, left, middle);
  } else if (target > sortedArr[middle]) {
    return binarySearchRecusion(sortedArr, target, middle, right);
  } else {
    return middle;
  }
};
