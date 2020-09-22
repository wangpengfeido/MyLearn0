/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let store = new Map([
    [0, 1],
    [1, 1],
  ]);

  function recursion(n) {
    if (store.has(n)) {
      return store.get(n);
    }

    let ans = recursion(n - 1) + recursion(n - 2);
    store.set(n, ans);

    return ans;
  }

  return recursion(n);
};

console.log(5, climbStairs(5));
