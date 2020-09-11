// 当数组中需要移除的元素较少，可以采用这种方式
// 遍历时遇到需要删除的元素，则将该元素与最后一个元素交换，同时数组长度减一
// 注意：被交换的最后一个元素也有可能是需要删除的元素，所以下一次遍历时仍然需要检查这个元素

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let length = nums.length;
  for (let i = 0; i < length; ) {
    if (nums[i] === val) {
      [nums[i], nums[length - 1]] = [nums[length - 1], nums[i]];
      length--;
    } else {
      i++;
    }
  }
  nums.length = length;
  return length;
};

let nums1 = [3, 2, 2, 3],
  val1 = 3;
console.log(removeElement(nums1, val1), nums1);

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2],
  val2 = 2;
console.log(removeElement(nums2, val2), nums2);
