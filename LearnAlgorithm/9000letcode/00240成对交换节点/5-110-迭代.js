// 两两交换

// 时间复杂度 O(N)
// 空间复杂度 O(1)

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
  let pre = new ListNode(0, head);
  let temp = pre;
  while (temp.next && temp.next.next) {
    const nextOne = temp.next;
    const nextTwo = nextOne.next;
    temp.next = nextTwo;
    nextOne.next = nextTwo.next;
    nextTwo.next = nextOne;
    temp = nextOne;
  }
  return pre.next;
};

console.log([1, 2, 3, 4], listToArray(swapPairs(arrayToList([1, 2, 3, 4]))));
console.log(
  [1, 2, 3, 4, 5],
  listToArray(swapPairs(arrayToList([1, 2, 3, 4, 5])))
);
