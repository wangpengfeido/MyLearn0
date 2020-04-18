function f(type, i) {
  if (i === 0) {
    return 0;
  }
  switch (type) {
    case 0:
      return f(1, i - 1) + f(0, i - 1);
    case 1:
      return f(0, i - 1) + f(1, i - 1) + Math.floor(i / 2);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i}:${f(1, i)}`);
}
