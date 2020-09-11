// 迭代一次反转k个节点
// 利用迭代反转k个节点，每次迭代的节点作为新的头节点

const { ListNode, arrayToList, listToArray } = require("./util.js");

/**
 * 反转两个节点之间的节点（包括头尾）
 */
function reverse(head, tail) {
  let newHead = tail.next;
  let temp = head;
  while (newHead !== tail) {
    let next = temp.next;
    temp.next = newHead;
    newHead = temp;
    temp = next;
  }
  return { head: tail, tail: head };
}

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
  let ansHead = new ListNode(0, head),
    ansTemp = ansHead;
  while (head) {
    // 找到k个节点的尾节点。
    // 并检查剩余节点是否还有小于k，如果小于k则原样返回
    let tail = new ListNode(0, head);
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return ansHead.next;
      }
    }

    // 反转k个节点
    ({ head, tail } = reverse(head, tail));

    // 将反转后的节点链接到总链表上
    ansTemp.next = head;
    ansTemp = tail;

    // 头移动到下个k个节点组的开头
    head = tail.next;
  }

  return ansHead.next;
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
