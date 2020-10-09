// 按单词长度依次遍历 s 的所有子串

// 假设 m=s.length, n=words.length
// 时间复杂度为 O(m*n^2)

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordLength = words[0].length;

  // 先将 s 按单词长度提取出单词
  const wordsInS = [];
  for (let i = 0; i <= s.length - wordLength; i++) {
    wordsInS.push(s.substring(i, i + wordLength));
  }

  // 遍历 s 查找符合条件的子串
  let ans = [];
  for (let i = 0; i <= s.length - wordLength * words.length; i++) {
    if (check(i, wordsInS, words)) {
      ans.push(i);
    }
  }

  return ans;
};

function check(i, wordsInS, words) {
  words = [...words];
  const wordLength = words[0].length;

  while (words.length) {
    let index = words.indexOf(wordsInS[i]);
    if (index >= 0) {
      words.splice(index, 1);
    } else {
      return false;
    }
    i += wordLength;
  }

  return true;
}

console.log(
  "barfoothefoobarman",
  ["foo", "bar"],
  findSubstring("barfoothefoobarman", ["foo", "bar"])
);

console.log(
  "wordgoodgoodgoodbestword",
  ["word", "good", "best", "word"],
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);

console.log(
  "barfoofoobarthefoobarman",
  ["bar", "foo", "the"],
  findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])
);
