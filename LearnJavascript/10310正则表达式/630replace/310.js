// 可以传入一个函数
// 第1个参数是匹配正则的子串
console.log(
  "mabn".replace(/a(b)/, function ($) {
    return `!${$}!`;
  })
);

// 从第2个参数开始为第n个子匹配
console.log(
  "mabn".replace(/a(b)/, function ($, $1) {
    return `!${$1}!`;
  })
);

// 再后面的参数是匹配在原字符串中的位置
console.log(
  "mabn".replace(/a(b)/, function ($, $1, offset) {
    return `!${offset}!`;
  })
);

// 然后是原字符串
console.log(
  "mabn".replace(/a(b)/, function ($, $1, offset, str) {
    return `!${str}!`;
  })
);
