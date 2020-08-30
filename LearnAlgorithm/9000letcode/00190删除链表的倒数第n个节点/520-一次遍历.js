// 使用两个指针，假设两个指针的位置为 i,j , 使两个指针始终保持距离为 j-i===n
// 当 j 走到结尾时，处理第 i 个节点即可

const { ListNode, arrayToList, listToArray } = require("./util.js");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let i = 1,
    tempI = head,
    j = 1,
    tempJ = head;
  while (tempJ.next) {
    if (j - i === n) {
      i++;
      tempI = tempI.next;
      j++;
      tempJ = tempJ.next;
    } else {
      j++;
      tempJ = tempJ.next;
    }
  }

  if (j - i < n) {
    return head.next;
  } else {
    tempI.next = tempI.next.next;
    return head;
  }
};

console.log(
  [1, 2, 3, 4, 5],
  2,
  listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2))
);
console.log(
  [1, 2, 3, 4, 5],
  1,
  listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 1))
);
console.log(
  [1, 2, 3, 4, 5],
  5,
  listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 5))
);
console.log([1, 2], 1, listToArray(removeNthFromEnd(arrayToList([1, 2]), 1)));
