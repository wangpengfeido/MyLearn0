function isPalindromic1(s) {
  return s === s.split('').reverse().join('');
}

function isPalindromic2(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// const str = 'abcdcba'; // 267    18
// const str = '123456789abcdcba987654321'; // 562    57
const str = '123456789abcdcba987654321z'; // 603    8

let one = Date.now();
for (let i = 0; i < 1000000; i++) {
  isPalindromic1(str);
}
console.log(Date.now() - one);

let two = Date.now();
for (let i = 0; i < 1000000; i++) {
  isPalindromic2(str);
}
console.log(Date.now() - two);

// 经实验可以看出，第二种方法的速度远快于第一种方法
// 因为 split,reverse,join 方法的时间复杂度都是 O(n)
