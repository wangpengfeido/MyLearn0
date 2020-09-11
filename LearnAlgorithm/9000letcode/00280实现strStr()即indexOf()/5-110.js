// 逐一比较
// 一旦发现有一位不一样，就开始下一次对比

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let j = 0;
    for (; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};

console.log("hello", "ll", strStr("hello", "ll"));
