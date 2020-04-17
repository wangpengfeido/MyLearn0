function f(i, j = 0) {
  if ((i === 0 && j === 0) || (i === 1 && j === 1) || (i === 0 && j === 2)) {
    return 1;
  }
  switch (j) {
    case 0:
      return f(i - 2, 0) + f(i - 1, 1) + f(i - 2, 2);
    case 1:
      return f(i - 1, 2);
    case 2:
      return f(i, 0) + f(i - 1, 1);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i * 2}:${f(i * 2)}`);
}
