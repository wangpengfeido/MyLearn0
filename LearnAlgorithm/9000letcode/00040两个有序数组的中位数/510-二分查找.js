// 注：下面的解释数组索引从0开始；k从1开始计数；除均是整数除法。

// 寻找中位数可以看作是寻找第 k 小的数
//     当 m+n 是奇数，k=(m+n)/2+1,中位数是第k个数
//     当 m+n 是偶数，k1=(m+n)/2, k2=(m+n)/2+1，中位数是（第k1个数+第k2个数）/2

// 假设两个数组 A,B,
// 选择 A[k/2-1] 和 B[k/2-1]，它们前面都有 k/2-1 个元素
// 所以对于 A[k/2-1] 和 B[k/2-1] 的较小值，前面最多有 (k/2−1)+(k/2−1)=k-2 个元素
// 这样就可以排除A[0]至A[k/2-1]

// 有三种特殊情况：
//     1. 如果  A[k/2-1] 或 B[k/2-1] 越界，那么取数组的最后一个元素。并根据排除个数减少k的值
//     2. 如果一个数组为空，可以直接取另一个数组中第 k 小的元素
//     3. 如果 k=1，取两个数组首元素最小值即可

// 时间复杂度为 O(log(m+n))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 寻找第k小的数
  function findK(nums1, nums2, k) {
    // 数组左端指针
    let index1 = 0,
      index2 = 0;
    while (true) {
      if (index1 >= nums1.length) {
        return nums2[index2 + k - 1];
      } else if (index2 >= nums2.length) {
        return nums1[index1 + k - 1];
      } else if (k === 1) {
        return Math.min(nums1[index1], nums2[index2]);
      }

      let halfIndex1 = Math.min(
          nums1.length - 1,
          index1 + Math.floor(k / 2) - 1
        ),
        halfIndex2 = Math.min(nums2.length - 1, index2 + Math.floor(k / 2) - 1);
      if (nums1[halfIndex1] <= nums2[halfIndex2]) {
        k -= halfIndex1 + 1 - index1;
        index1 = halfIndex1 + 1;
      } else {
        k -= halfIndex2 + 1 - index2;
        index2 = halfIndex2 + 1;
      }
    }
  }

  const sumLength = nums1.length + nums2.length;
  if (sumLength % 2 === 1) {
    return findK(nums1, nums2, Math.floor(sumLength / 2) + 1);
  } else {
    return (
      (findK(nums1, nums2, Math.floor(sumLength / 2)) +
        findK(nums1, nums2, Math.floor(sumLength / 2) + 1)) /
      2
    );
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([2, 3], [1]));
