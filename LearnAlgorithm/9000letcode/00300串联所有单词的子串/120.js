// 该解法时间复杂度过高，不予参考

// 先求出words的所有排列可能
// 然后遍历s，查找上面可能的排列是否出现

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordsFullPermutations = getFullPermutation(words).map((item) => {
    return item.join("");
  });
  const permutationLength = wordsFullPermutations[0].length;

  let ans = [];
  for (let i = 0; i <= s.length - permutationLength; i++) {
    let subStr = s.substring(i, i + permutationLength);
    if (wordsFullPermutations.indexOf(subStr) >= 0) {
      ans.push(i);
    }
  }

  return ans;
};

// 求全排列
function getFullPermutation(words) {
  if (words.length === 1) {
    return [[words[0]]];
  }

  let ans = [];
  for (let i = 0; i < words.length; i++) {
    let nextWords = [...words];
    nextWords.splice(i, 1);
    let nextPermutation = getFullPermutation(nextWords);
    nextPermutation.forEach((item) => {
      item.push(words[i]);
    });
    ans = ans.concat(nextPermutation);
  }

  return ans;
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
