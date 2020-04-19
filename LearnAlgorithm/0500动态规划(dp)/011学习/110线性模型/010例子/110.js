/**
 * @param {Array} T
 */
function f(T) {
  const opt = [, T[1], T[2]];
  const n = T.length - 1;
  for (let i = 3; i <= n; i++) {
    const case1 = opt[i - 1] + T[1] + T[i];
    const case2 = opt[i - 2] + T[1] + T[i] + T[2] * 2;
    opt[i] = Math.min(case1, case2);
  }
  return opt[n];
}

const T1 = [, 1, 2, 5, 10];
console.log(T1, f(T1));
function rand(n) {
  const res = [,];
  for (let i = 0; i < n; i++) {
    res.push(1 + parseInt(Math.random() * n));
  }
  return res;
}
const T2 = rand(10);
console.log(T2, f(T2));
const T3 = rand(50);
console.log(T3, f(T3));
