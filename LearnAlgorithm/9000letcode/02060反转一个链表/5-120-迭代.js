// 迭代，每次迭代的节点作为新的头节点

// 时间复杂度为 O(n)
// 空间复杂度为 O(1)

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
  let ans = null;
  let temp = head;
  while (temp) {
    let next = temp.next;
    temp.next = ans;
    ans = temp;
    temp = next;
  }
  return ans;
};

console.log([], listToArray(reverseList(arrayToList([]))));
console.log(
  [1, 2, 3, 4, 5],
  listToArray(reverseList(arrayToList([1, 2, 3, 4, 5])))
);
