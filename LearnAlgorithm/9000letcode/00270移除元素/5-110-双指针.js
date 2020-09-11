/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ansLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[ansLength] = nums[i];
      ansLength++;
    }
  }
  nums.length = ansLength;
  return ansLength;
};

let nums1 = [3, 2, 2, 3],
  val1 = 3;
console.log(removeElement(nums1, val1), nums1);

let nums2 = [0,1,2,2,3,0,4,2],
  val2 = 2;
console.log(removeElement(nums2, val2), nums2);
