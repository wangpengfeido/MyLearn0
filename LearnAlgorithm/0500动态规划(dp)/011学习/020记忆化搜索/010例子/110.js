function w(a, b, c, store = new Map()) {
  const key = `${a}-${b}-${c}`;
  if (store.has(key)) {
    return store.get(key);
  }
  let res;
  switch (true) {
    case a <= 0 || b <= 0 || c <= 0:
      res = 1;
      break;
    case a > 20 || b > 20 || c > 20:
      res = w(20, 20, 20);
      break;
    case a < b && b < c:
      res = w(a, b, c - 1, store) + w(a, b - 1, c - 1, store) - w(a, b - 1, c, store);
      break;
    default:
      res = w(a - 1, b, c, store) + w(a - 1, b - 1, c, store) + w(a - 1, b, c - 1, store);
  }
  store.set(key, res);
  return res;
}

console.log(w(20, 20, 20));
