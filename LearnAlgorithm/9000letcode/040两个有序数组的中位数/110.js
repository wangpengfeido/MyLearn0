// 简要：使用递归的方法，从最小数和最大数两端向中间取
// 从两数组末尾取较大数，从两数组开头取较小数

// 详细：
// 假设两个排序数组 A、B，长度分别为 m、n.数组 A、B 的中位数表示为 M(A, B)
// 有下面四种情况：
//   1. M(A, B) = M(A[1,...,m-2], B)                n==0 || (A[0]<=B[0] && A[m-1]>B[n-1])
//   2. M(A, B) = M(A, B[1,...,n-2])                m==0 || (A[0]>B[0] && A[m-1]<=B[n-1])
//   3. M(A, B) = M(A[1,...,m-1], B[0,...,n-2])     A[0]<=B[0] && A[m-1]<=B[n-1]
//   3. M(A, B) = M(A[0,...,m-2], B[1,...,n-1])     A[0]>B[0] && A[m-1]>B[n-1]
// 边界情况为：
//   m+n== 2 || m+n==1,    M(A, B)=sum{A,B}/2

// 时间复杂度为 O(m+n)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  function dealTwoArray(nums1, nums2, isCompareSmall) {
    const takeFromArr = isCompareSmall ? Array.prototype.shift : Array.prototype.pop;
    if (!nums1.length) {
      takeFromArr.call(nums2);
    } else if (!nums2.length) {
      takeFromArr.call(nums1);
    } else {
      const compare = isCompareSmall ? nums1[0] < nums2[0] : nums1[nums1.length - 1] > nums2[nums2.length - 1];
      compare ? takeFromArr.call(nums1) : takeFromArr.call(nums2);
    }
  }
  function f(nums1, nums2) {
    let sumLength = nums1.length + nums2.length;
    if (sumLength <= 2) {
      return (
        [...nums1, ...nums2].reduce((acc, item) => {
          return acc + item;
        }, 0) / sumLength
      );
    }
    dealTwoArray(nums1, nums2, true);
    dealTwoArray(nums1, nums2, false);
    return f(nums1, nums2);
  }
  return f(nums1, nums2);
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([2, 3], [1]));
