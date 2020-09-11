// 在 ./110.js 的基础上优化而来。
// 增加了头节点，省去了第一次合并的空节点检查

// 时间复杂度 O(m+n)
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
