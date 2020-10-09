// 从 110 优化而来
// 按单词长度依次遍历 s 的所有子串
// 子串检查过程使用 hash表 优化

// 假设 m=s.length, n=words.length
// 时间复杂度为 O(m*n)

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordLength = words[0].length;

  // 提取words的hash表
  const wordsHash = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!wordsHash[word]) {
      wordsHash[word] = 1;
    } else {
      wordsHash[word]++;
    }
  }

  // 先将 s 按单词长度提取出单词
  const wordsInS = [];
  for (let i = 0; i <= s.length - wordLength; i++) {
    wordsInS.push(s.substring(i, i + wordLength));
  }

  // 遍历 s 查找符合条件的子串
  const substrLength = wordLength * words.length;
  let ans = [];
  for (let i = 0; i <= s.length - substrLength; i++) {
    if (check(i, wordsInS, wordsHash, substrLength)) {
      ans.push(i);
    }
  }

  return ans;
};

function check(i, wordsInS, wordsHash, substrLength) {
  wordsHash = Object.assign({}, wordsHash);
  const wordLength = wordsInS[0].length;

  while (substrLength) {
    if (wordsHash[wordsInS[i]]) {
      wordsHash[wordsInS[i]]--;
    } else {
      return false;
    }
    i += wordLength;
    substrLength -= wordLength;
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
