// 递归，由 ./130 优化而来。
// 在 ./130 中，其实每次递归是不需要返回尾节点的。因为 head.next 实际就是反转后的尾节点，它们之间的链接并未断开。

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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let nextHead = reverseList(head.next);

  // head.next 就是已反转链表的尾节点，head.next.next就是将还未反转的头节点作为新的尾节点
  head.next.next = head;
  // 将新的尾节点的下一个元素置为 null.
  head.next = null;

  return nextHead;
};

console.log([], listToArray(reverseList(arrayToList([]))));
console.log(
  [1, 2, 3, 4, 5],
  listToArray(reverseList(arrayToList([1, 2, 3, 4, 5])))
);
