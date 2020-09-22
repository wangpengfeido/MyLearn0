// 循环每次合并数组中的一个链表

// 时间复杂度 O((k^2)n), k是数组长度，n是最大链表长度
// 空间复杂度 O(1)

const { ListNode, arrayToList, listToArray } = require("./util.js");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let preNode = new ListNode(-Infinity);
  let resTemp = preNode;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      resTemp.next = l1;
      l1 = l1.next;
    } else {
      resTemp.next = l2;
      l2 = l2.next;
    }
    resTemp = resTemp.next;
  }

  resTemp.next = l1 ? l1 : l2;

  return preNode.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let ans = new ListNode(-Infinity);
  for (let i = 0; i < lists.length; i++) {
    ans = mergeTwoLists(ans, lists[i]);
  }
  return ans.next;
};

console.log(
  listToArray(
    mergeKLists([
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6]),
    ])
  )
);

