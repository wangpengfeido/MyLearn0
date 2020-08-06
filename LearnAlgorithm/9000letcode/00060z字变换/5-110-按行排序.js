// 遍历字符串，将字符插入到对应的行中

// 时间复杂度是 O(n)
// 空间复杂度是 O(n)


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let rows = Array.from({ length: numRows }).map(() => []);
  for (let i = 0, rowIndex = 0, rowIndexAdding = true; i < s.length; i++) {
    rows[rowIndex].push(s[i]);
    if (numRows !== 1) {
      if (
        (rowIndexAdding && rowIndex >= numRows - 1) ||
        (!rowIndexAdding && rowIndex <= 0)
      ) {
        rowIndexAdding = !rowIndexAdding;
      }
      if (rowIndexAdding) {
        rowIndex++;
      } else {
        rowIndex--;
      }
    }
  }
  const ans = rows.reduce((accu, cur) => {
    cur.forEach((item) => (accu += item));
    return accu;
  }, "");
  return ans;
};

console.log(convert("AB", 1));
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
