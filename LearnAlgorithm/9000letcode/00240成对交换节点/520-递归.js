// 递归方式

// 时间复杂度 O(N)
// 空间复杂度 O(N)

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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;

  return next;
};

console.log([1, 2, 3, 4], listToArray(swapPairs(arrayToList([1, 2, 3, 4]))));
console.log(
  [1, 2, 3, 4, 5],
  listToArray(swapPairs(arrayToList([1, 2, 3, 4, 5])))
);
