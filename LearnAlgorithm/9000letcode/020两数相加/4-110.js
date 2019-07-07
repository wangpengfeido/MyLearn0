const { ListNode, parseNumberToList, parseListToNumber } = require("./common");

// 利用递归将链表相加

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function addList(l1, l2, carry = 0) {
    if (l1 && !l2) {
      l2 = new ListNode(0);
    } else if (!l1 && l2) {
      l1 = new ListNode(0);
    } else if (!l1 && !l2 && carry) {
      l1 = new ListNode(0);
      l2 = new ListNode(0);
    } else if (!l1 && !l2) {
      return null;
    }
    let val = l1.val + l2.val + carry;
    let newCarry = 0;
    if (val >= 10) {
      val = val - 10;
      newCarry = 1;
    }
    const result = new ListNode(val);
    result.next = addList(l1.next, l2.next, newCarry);
    return result;
  }

  return addList(l1, l2);
};

console.log(parseListToNumber(addTwoNumbers(parseNumberToList(342), parseNumberToList(465))));
console.log(parseListToNumber(addTwoNumbers(parseNumberToList(5), parseNumberToList(5))));
