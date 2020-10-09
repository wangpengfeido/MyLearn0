// 通过观察可以找出解决方法
// 从后向前找出非升序排序的数（数字相同也算升序），然后找出这个数后面大于且最接近这个数的数，将这两个数交换，然后将剩下的数反转变为从前向后升序排序。
// 例如 13542->14235。从后向前非升序的数为3，3后面大于且最接近的数字为4，将4放到3的位置，然后将剩下的2/3/5升序排序，得到14235。

// 优化一下计算过程，我们可以这样解决
// 从后向前找出非升序排序的数，将其后面的数反转变为升序排序，然后将这个数与大于并最接近于它的数交换
// 因为先排序后，更容易找到大于并最接近于它的数

// 时间复杂度 O(n)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 1;
  for (; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      break;
    }
  }

  if (i <= 0) {
    reverseArr(nums, 0);
    return;
  }

  reverseArr(nums, i);
  i--;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] > nums[i]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      break;
    }
  }
};

// 将 start到结尾 的元素反转
function reverseArr(arr, start) {
  for (let i = start, j = arr.length - 1; j > i; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let p1 = [1, 2, 3];
nextPermutation(p1);
console.log([1, 2, 3], p1);

let p2 = [3, 2, 1];
nextPermutation(p2);
console.log([3, 2, 1], p2);

let p3 = [1, 1, 5];
nextPermutation(p3);
console.log([1, 1, 5], p3);

let p4 = [1];
nextPermutation(p4);
console.log([1], p4);

let p5 = [1, 3, 5, 4, 2];
nextPermutation(p5);
console.log([1, 3, 5, 4, 2], p5);

let p6 = [1, 2, 5, 5, 3];
nextPermutation(p6);
console.log([1, 2, 5, 5, 3], p6);

