// 在两个链表分别设置指针，更小的指针合并。当一个链表为空时直接合并到尾部。

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
  let res = null,
    resTemp = null;
  let temp1 = l1,
    temp2 = l2;
  while (temp1 && temp2) {
    let operateNode;
    if (temp1.val <= temp2.val) {
      operateNode = temp1;
      temp1 = temp1.next;
    } else {
      operateNode = temp2;
      temp2 = temp2.next;
    }
    if (!resTemp) {
      res = operateNode;
      resTemp = res;
    } else {
      resTemp.next = operateNode;
      resTemp = resTemp.next;
    }
  }

  if (!temp1) {
    resTemp ? (resTemp.next = temp2) : (res = temp2);
  } else {
    resTemp ? (resTemp.next = temp1) : (res = temp1);
  }

  return res;
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
