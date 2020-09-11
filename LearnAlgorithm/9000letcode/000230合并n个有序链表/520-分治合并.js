// 两两链表为一组进行合并

// 时间复杂度 O(kn*log(n)), k是数组长度，n是最大链表长度

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
  function merge(lists, left, right) {
    if (left === right) {
      return lists[left];
    }
    if (left > right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2);
    return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
  }
  return merge(lists, 0, lists.length - 1);
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
