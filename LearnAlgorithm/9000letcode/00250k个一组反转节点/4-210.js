// 反转k个节点后，递归反转剩下的节点
// 利用迭代反转k个节点，每次迭代的节点作为新的头节点

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 找到k个节点的尾节点。
  // 并检查剩余节点是否还有小于k，如果小于k则原样返回
  let tail = new ListNode(0, head);
  for (let i = 0; i < k; i++) {
    tail = tail.next;
    if (!tail) {
      return head;
    }
  }

  // 反转k个节点
  let newHead = tail.next;
  let temp = head;
  while (newHead !== tail) {
    let next = temp.next;
    temp.next = newHead;
    newHead = temp;
    temp = next;
  }

  // 此时原来的头变成了尾，原来的尾变成了头
  // 递归处理剩余节点
  head.next = reverseKGroup(head.next, k);

  return tail;
};

console.log(
  [1, 2, 3, 4, 5],
  1,
  listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 1))
);

console.log(
  [1, 2, 3, 4, 5],
  2,
  listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2))
);

console.log(
  [1, 2, 3, 4, 5],
  3,
  listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 3))
);

console.log(
  [1, 2, 3, 4, 5, 6],
  3,
  listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5, 6]), 3))
);
