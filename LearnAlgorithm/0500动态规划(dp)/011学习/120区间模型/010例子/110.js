function f(str) {
  let store = new Map();
  function doCalc(i = 0, j = str.length - 1) {
    if (i >= j) {
      return 0;
    }
    if (store.has(`${i}-${j}`)) {
      return store.get(`${i}-${j}`);
    }
    let res;
    if (str[i] === str[j]) {
      res = doCalc(i + 1, j - 1);
    } else {
      res = Math.min(doCalc(i + 1, j), doCalc(i, j - 1)) + 1;
    }
    store.set(`${i}-${j}`, res);
    return res;
  }
  return doCalc();
}

const str1 = 'sdfi';
console.log(`${str1}:${f(str1)}`);
const str2 = 'sdffi';
console.log(`${str2}:${f(str2)}`);
