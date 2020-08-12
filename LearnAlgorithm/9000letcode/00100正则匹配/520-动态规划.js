// 我们可以对中间结果进行缓存

// 我们再重新总结一下 510 的算法：
// 从前向后进行对比
// 假设 f(i)(j) 表示 s[i,...], p[j,...] 是否可匹配

/**
    f(i)(j) = 当 p.length-j>=2 && p[j+1]==="*" （p[j,...]不是"x*xxx"）
                  f(i+1)(j+1)    当 s[0] 匹配 p[0]
                  false    当 s[0] 不匹配 p[0]
              否则 （p[j,...]是"x*xxx"）
                  f(i)(j+2) || f(i+1)(j)    当 s[0] 匹配 p[0]
                  f(i)(j+2)    当 s[0] 不匹配 p[0]
 */
// 边界条件是 f[i][j] = true, i=s.length, j=p.length

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const store = Array.from({ length: s.length + 1 }).map(() =>
    Array.from({ length: p.length + 1 })
  );

  function match(i, j) {
    if (store[i][j] !== undefined) {
      return store[i][j];
    }
    let res;

    if (i >= s.length && j >= p.length) {
      return true;
    }
    const firstIsMatch = s[i] === p[j] || (p[j] === "." && i < s.length);

    if (p.length - j >= 2 && p[j + 1] === "*") {
      if (firstIsMatch) {
        res = match(i, j + 2) || match(i + 1, j);
      } else {
        res = match(i, j + 2);
      }
    } else {
      res = firstIsMatch && match(i + 1, j + 1);
    }

    store[i][j] = res;
    return res;
  }

  return match(0, 0);
};

console.log("aa", "a", isMatch("aa", "a"));
console.log("aa", "a*", isMatch("aa", "a*"));
console.log("ab", ".*", isMatch("ab", ".*"));
console.log("aab", "c*a*b", isMatch("aab", "c*a*b"));
console.log("mississippi", "mis*is*p*.", isMatch("mississippi", "mis*is*p*."));
