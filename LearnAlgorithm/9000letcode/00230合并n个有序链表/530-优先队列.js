const { ListNode, arrayToList, listToArray } = require("./util.js");

// 使用优先队列优化 ./110.js 的比较过程

// 时间复杂度 O(kn*log(n)), k是数组长度，n是最大链表长度

/**
 * 优先队列简单实现
 * 优先级数字越小，优先度越高
 */
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  push(priority, value) {
    for (let i = 0; i < this.queue.length; i++) {
      if (priority < this.queue[i].priority) {
        this.queue.splice(i, 0, { priority, value });
        return;
      }
    }
    this.queue.push({ priority, value });
  }
  pop() {
    const temp = this.queue.shift();
    if (temp) {
      return temp.value;
    } else {
      return null;
    }
  }
  isEmpty() {
    return !this.queue.length;
  }
}

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
  const priorityQueue = new PriorityQueue();
  const head = (tail = new ListNode());
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      priorityQueue.push(lists[i].val, lists[i]);
    }
  }
  while (!priorityQueue.isEmpty()) {
    const temp = priorityQueue.pop();
    tail.next = temp;
    tail = tail.next;
    const next = temp.next;
    if (next) {
      priorityQueue.push(next.val, next);
    }
  }
  return head.next;
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

