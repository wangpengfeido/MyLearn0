// 使用递归的方法，从最小数和最大数两端向中间取
// 当然，也可以使用循环

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
