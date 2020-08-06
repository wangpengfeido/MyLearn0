// 按顺序读取对应行的字符

// 如果共有 r 行（从1开始）,第 i 次循环
// 第 1 行的索引为 (2r-2)*i
// 第 r 行的索引为 (2r-2)*i+r-1
// 内部行第n行（从1开始）索引为 (2r-2)*i+n-1 及 (2r-2)*i+r-1+(r-n)

// 时间复杂度是 O(n)
// 空间复杂度是 O(1)

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let ans = "";
  for (let n = 1; n <= numRows; n++) {
    for (let i = 0; true; i++) {
      let index;
      if (n === 1) {
        index = (2 * numRows - 2) * i;
        if (index >= s.length) {
          break;
        }
        ans += s[index];
      } else if (n === numRows) {
        index = (2 * numRows - 2) * i + numRows - 1;
        if (index >= s.length) {
          break;
        }
        ans += s[index];
      } else {
        index = (2 * numRows - 2) * i + n - 1;
        if (index >= s.length) {
          break;
        }
        ans += s[index];
        index = (2 * numRows - 2) * i + numRows - 1 + (numRows - n);
        if (index >= s.length) {
          break;
        }
        ans += s[index];
      }
    }
  }
  return ans;
};

console.log(convert("AB", 1));
console.log(convert("AB", 2));
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
