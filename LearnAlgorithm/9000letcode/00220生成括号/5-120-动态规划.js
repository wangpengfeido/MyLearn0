// 动态规划
// n 对括号的组合，可以由 0,...,n-1 对括号的组合推导而来
// 因为 n 对括号的组合可以表示为 (a)b, a 是 i 对括号的组合，b 是 j 对括号的组合，i+j=n-1

// 时间复杂度粗略大约为 O((n^2)*(2^n))

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const store = {};

  function dp(n) {
    if (n === 0) {
      return [""];
    }
    if (n === 1) {
      return ["()"];
    }
    if (store[n]) {
      return store[n];
    }

    let ans = [];
    for (let i = 0; i <= n - 1; i++) {
      const a = dp(i);
      const b = dp(n - 1 - i);
      a.forEach((aItem) => {
        b.forEach((bItem) => {
          ans.push("(" + aItem + ")" + bItem);
        });
      });
    }

    store[n] = ans;
    return ans;
  }

  if (n === 0) {
    return [];
  } else {
    return dp(n);
  }
};

console.log(0, generateParenthesis(0));
console.log(1, generateParenthesis(1));
console.log(2, generateParenthesis(2));
console.log(3, generateParenthesis(3));
console.log(4, generateParenthesis(4));
