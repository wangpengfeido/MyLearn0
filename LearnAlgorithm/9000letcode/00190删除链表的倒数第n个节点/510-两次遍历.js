// 两次遍历，第一次求出链表的长度 L，第二次找出第 L-n 个节点，将其指向第 L-n+2 个节点

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
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }

  if (length === n) {
    return head.next;
  }

  temp = head;
  let i = 1;
  while (temp) {
    if (length - n === i) {
      temp.next = temp.next.next;
      break;
    }
    temp = temp.next;
    i++;
  }

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
