// 有整数 n，n 有 k 位，假设 A[n] 表示小于等于 n 的整数中出现1的次数

// 有下面的关系：相同位数的10的整次幂数字 m=10^(k-1), 首位数字 h=Math.floor(n/m)
// A[n] =
//     A[m-1] + A[n-h*m] + (n-m+1), 当 n<2*m
//     A[m-1]*h + A[n-h*m] + m, 当 n>=2*m

// 例如：
// A[188] = A[99] + A[88] + 89
// A[388] = A[99]*3 + A[88] + 100

// 解释：
//     以 388 为例
//         第一段为0~299除了最高位外，出现1的次数。即0~99出现出现次数*最高位
//         第二段为300~388除了最高位外，出现1的次数。即0~88出现次数
//         第三段为最高位出现次数。
//             对于 388 而言，这个值在100~199，共100次
//             对于 188 而言，这个值在100~188，共89次

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const store = new Map();

  function recursion(n) {
    if (n === 0) {
      return 0;
    } else if (n <= 9) {
      return 1;
    }

    if (store.has(n)) {
      return store.get(n);
    }

    let k = n.toString().length,
      m = Math.pow(10, k - 1),
      h = Math.floor(n / m);

    let ans;
    if (n < 2 * m) {
      ans = recursion(m - 1) + recursion(n - h * m) + (n - m + 1);
    } else {
      ans = recursion(m - 1) * h + recursion(n - h * m) + m;
    }

    store.set(n, ans);
    return ans;
  }

  if (n < 0) {
    return 0;
  }
  return recursion(n);
};

console.log(-1, countDigitOne(-1));
console.log(13, countDigitOne(13));
console.log(188, countDigitOne(188));
console.log(388, countDigitOne(388));
