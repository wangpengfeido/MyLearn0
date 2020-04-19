function f(c, m, n) {
  let d = [];
  for (let i = 1; i <= n + 1; i++) {
    if (i === 1) {
      d[i] = c;
      continue;
    }

    d[i] = Infinity;
    const wI = i === n + 1 ? 0 : c;
    for (let j = 1; j < i; j++) {
      d[i] = Math.min(d[i], d[j] + m(j, i - 1) + wI);
    }
  }
  return d[n + 1];
}

function m(y, z) {
  let res = 0;
  for (let i = 0; i <= z - y; i++) {
    res += 0.5 + i * 0.3;
  }
  return res;
}
const c = 5;
console.log(`${1}:${f(c, m, 1)}`);
console.log(`${2}:${f(c, m, 2)}`);
console.log(`${10}:${f(c, m, 10)}`);
console.log(`${100}:${f(c, m, 100)}`);
