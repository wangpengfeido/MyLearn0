function f(B, P, p) {
  function calc(i, ip) {
    if (i < 0) {
      return 0;
    }
    const case1 = calc(i - 1, ip);
    if (ip - P[i] < 0) {
      return case1;
    } else {
      const case2 = calc(i - 1, ip - P[i]) + B[i];
      return Math.max(case1, case2);
    }
  }

  return calc(B.length - 1, p);
}

const q1 = {
  B: [1, 2, 3, 4, 5],
  P: [1, 2, 4, 8, 16],
  p: 10,
};
console.log(`${JSON.stringify(q1)}:${f(q1.B, q1.P, q1.p)}`);
