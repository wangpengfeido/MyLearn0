// 假设 P[n] 表示 Pow(x,n) 的值，有
// P[n] = P[Math.ceil(n.2)]*P[n-Math.ceil(n.2)]


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const store = new Map([
    [0, 1],
    [1, x],
    [-1, 1 / x],
  ]);

  function recursion(n) {
    if (store.has(n)) {
      return store.get(n);
    }

    let n1 = Math.ceil(n / 2),
      n2 = n - n1;
    let ans = recursion(n1) * recursion(n2);
    store.set(n, ans);

    return ans;
  }

  return recursion(n);
};

console.log(2, 10, myPow(2, 10));
console.log(2.1, 3, myPow(2.1, 3));
console.log(2, -2, myPow(2, -2));
