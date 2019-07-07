function ListNode(val) {
  this.val = val;
  this.next = null;
}
function parseNumberToList(num) {
  const arr_num = num.toString().split("");
  let result = new ListNode(parseInt(arr_num.pop()));
  let temp = result;
  while (arr_num.length) {
    temp.next = new ListNode(parseInt(arr_num.pop()));
    temp = temp.next;
  }
  return result;
}
function parseListToNumber(list) {
  const arr_num = [];
  let temp = list;
  while (temp) {
    arr_num.unshift(temp.val);
    temp = temp.next;
  }
  return parseInt(arr_num.join(""));
}

exports.ListNode = ListNode;
exports.parseNumberToList = parseNumberToList;
exports.parseListToNumber = parseListToNumber;

