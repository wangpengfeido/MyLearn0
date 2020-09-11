// 迭代方式，利用栈

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
  const stack = [];
  let temp = head;
  while (temp) {
    stack.push(temp);
    temp = temp.next;
  }

  temp = stack.pop() || null;
  const pre = temp;
  while (temp) {
    temp.next = stack.pop() || null;
    temp = temp.next;
  }

  return pre;
};

console.log([], listToArray(reverseList(arrayToList([]))));
console.log(
  [1, 2, 3, 4, 5],
  listToArray(reverseList(arrayToList([1, 2, 3, 4, 5])))
);
