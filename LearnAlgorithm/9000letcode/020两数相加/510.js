const { ListNode, parseNumberToList, parseListToNumber } = require("./common");

// 非递归解法
// 效率并不如使用递归

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(0);
  let temp = result,
    temp1 = l1,
    temp2 = l2;
  let carry = 0;
  while (temp1 || temp2 || carry) {
    const val1 = temp1 ? temp1.val : 0;
    const val2 = temp2 ? temp2.val : 0;
    let val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    temp.next = new ListNode(val % 10);
    temp = temp.next;
    temp1 && (temp1 = temp1.next);
    temp2 && (temp2 = temp2.next);
  }
  return result.next;
};

console.log(parseListToNumber(addTwoNumbers(parseNumberToList(342), parseNumberToList(465))));
console.log(parseListToNumber(addTwoNumbers(parseNumberToList(5), parseNumberToList(5))));
