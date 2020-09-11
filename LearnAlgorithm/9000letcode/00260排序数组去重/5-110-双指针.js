/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let ansLength = 0,
    numTemp;
  for (let i = 0; i < nums.length; i++) {
    if (numTemp !== nums[i]) {
      numTemp = nums[i];
      nums[ansLength] = numTemp;
      ansLength++;
    }
  }
  nums.length = ansLength;
  return ansLength;
};

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2);
