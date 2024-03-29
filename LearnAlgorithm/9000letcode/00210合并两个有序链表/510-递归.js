// 使用递归的方式
/**
    将问题分解:
      merge(l1,l2) = l1[0] + merge(l1.next, l2), l1[0]<=l2[0]
                     l2[0] + merge(l1, l2.next), l1[0]>l2[0]
    边界情况是 l1,l2 一者为空时直接返回另一者
 */

 // 时间复杂度 O(m+n)
// 空间复杂度 O(m+n)

const { ListNode, arrayToList, listToArray } = require("./util.js");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

console.log(
  [],
  [],
  listToArray(mergeTwoLists(arrayToList([]), arrayToList([])))
);

console.log(
  [1, 2, 4],
  [1, 3, 4],
  listToArray(mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4])))
);
