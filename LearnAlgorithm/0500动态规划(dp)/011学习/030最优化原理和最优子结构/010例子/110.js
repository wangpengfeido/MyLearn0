function f1(arr) {
  const storeD = new Map();

  function d(i) {
    if (i === 0) {
      return 1;
    }
    if (storeD.has(i)) {
      return storeD.get(i);
    }
    let maxDJ = 0;
    for (j = 0; j < i; j++) {
      const dJ = d(j);
      if (arr[j] < arr[i]) {
        maxDJ = Math.max(maxDJ, dJ);
      }
    }
    const res = maxDJ + 1;
    storeD.set(i, res);
    return res;
  }

  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res = Math.max(res, d(i));
  }
  return res;
}

function f2(arr) {
  const d = Array.from({ length: arr.length }).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        d[i] = Math.max(d[j] + 1, d[i]);
      }
    }
  }

  return Math.max(...d);
}

const a1 = ['1', '2', '3', '3', '5', '0', '1'];
console.log(`${a1.join('')}:${f1(a1)};${f2(a1)}`);
const a2 = Array.from({ length: 10 }).map(() => {
  return String.fromCharCode(48 + parseInt(Math.random() * 10));
});
console.log(`${a2.join('')}:${f1(a2)};${f2(a2)}`);
const a3 = Array.from({ length: 100 }).map(() => {
  return String.fromCharCode(65 + parseInt(Math.random() * 26));
});
console.log(`${a3.join('')}:${f1(a3)};${f2(a3)}`);
const a4 = Array.from({ length: 1000 }).map(() => {
  return String.fromCharCode(33 + parseInt(Math.random() * 93));
});
console.log(`${a4.join('')}:${f1(a4)};${f2(a4)}`);
