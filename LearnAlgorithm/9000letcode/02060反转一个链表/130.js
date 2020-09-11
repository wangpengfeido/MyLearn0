// 递归
// 将头节点分开，剩下的节点递归反转后，头节点再放到最后。

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
  function recursion(head) {
    if (!head.next) {
      return { head: head, tail: head };
    }

    let { head: nextHead, tail: nextTail } = recursion(head.next);

    head.next = null;
    nextTail.next = head;

    return { head: nextHead, tail: nextTail.next };
  }

  if (!head) {
    return null;
  }
  return recursion(head).head;
};

console.log([], listToArray(reverseList(arrayToList([]))));
console.log(
  [1, 2, 3, 4, 5],
  listToArray(reverseList(arrayToList([1, 2, 3, 4, 5])))
);

