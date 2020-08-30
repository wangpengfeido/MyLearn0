// 利用递归解决

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
  function recursion(recursionHead) {
    let nthFromEnd;
    if (!recursionHead.next) {
      nthFromEnd = 1;
    } else {
      nthFromEnd = recursion(recursionHead.next) + 1;
    }
    if (nthFromEnd === n + 1) {
      recursionHead.next = recursionHead.next.next;
    }
    if (recursionHead === head && nthFromEnd === n) {
      head = head.next;
    }
    return nthFromEnd;
  }

  recursion(head);
  return head;
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
