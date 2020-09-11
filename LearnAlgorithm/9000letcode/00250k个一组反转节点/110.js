// 利用栈进行k个反转
// 反转k个节点后，递归反转剩下的节点

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
  let temp = head;
  const stack = [];
  for (let i = 0; i < k; i++) {
    // 不足k个，直接原样返回
    if (!temp) {
      return head;
    }
    stack.push(temp);
    temp = temp.next;
  }

  const remaind = reverseKGroup(temp, k);

  const pre = stack.pop();
  temp = pre;
  let next = stack.pop();
  while (next) {
    temp.next = next;
    temp = next;
    next = stack.pop();
  }
  temp.next = remaind;

  return pre;
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
