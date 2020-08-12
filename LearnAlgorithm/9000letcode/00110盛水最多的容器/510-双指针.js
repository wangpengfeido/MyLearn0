// 思路：从多到少检查，开始时两个指针位于最两端，每次短的指针向中间移动。

// 可以看出，短的指针向中间移动后，不可能出现比之前更大的容器。
// 因为向内移动时x轴距离减小，只有向内移动短指针，最小的y轴长度才有可能变长。
// 如果向内移动长指针，最小y轴长度一定会不变或减小，x轴距离减小，容器一定会减小。

// 再用数学语言描述一下：
// 假设当前指针位于 (i,a[i]) 与 (j,a[j])， i<j, i与j之间的距离为t。一般地，假设 a[i]<a[j]。
// 此时，容器大小为 min(a[i],a[j])*t = a[i]*t
// 如果我们向内移动长指针，移动后指针位于 (i,a[i]) 与 (j-1,a[j-1])
// 此时，容器大小为 min(a[i],a[j-1])*(t-1)
//     若 a[j-1]>a[i], min(a[i],a[j-1])*(t-1) = a[i]*(t-1) < a[i]*t
//     若 a[j-1]<a[i], min(a[i],a[j-1])*(t-1) = a[j-1]*(t-1) < a[i]*t
// 所以，长指针向内移动一定会导致容器减小

// 时间复杂度为 O(n)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1;
  let ans = 0;
  while (i < j) {
    ans = Math.max(Math.min(height[i], height[j]) * (j - i), ans);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return ans;
};

console.log([1, 8, 6, 2, 5, 4, 8, 3, 7], maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
