// 从前向后依次迭代。每次找出链表列表的最小头节点。

// 时间复杂度 O((k^2)n), k是数组长度，n是最大链表长度

const { ListNode, arrayToList, listToArray } = require("./util.js");

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
  let minNodeIndex = -1;

  // 找出最小头节点
  for (let i = 0; i < lists.length; i++) {
    if (
      !lists[minNodeIndex] ||
      (lists[i] && lists[i].val < lists[minNodeIndex].val)
    ) {
      minNodeIndex = i;
    }
  }

  const minNode = lists[minNodeIndex];
  if (!minNode) {
    return null;
  } else {
    lists[minNodeIndex] = lists[minNodeIndex].next;
    minNode.next = mergeKLists(lists);
    return minNode;
  }
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
