// 由110优化而来。一个数组全部比较完后，直接复制剩下的元素
// 从后往前的双指针

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  for (let i = m + n - 1; p1 >= 0 && p2 >= 0 && i >= 0; i--) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  nums1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1));
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

// const nums1 = [0],
//   m = 0,
//   nums2 = [2],
//   n = 1;
// merge(nums1, m, nums2, n);
// console.log(nums1);
