function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  if (!arr.length) {
    return null;
  }

  let res = new ListNode(arr[0]);
  let temp = res;
  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }

  return res;
}

function listToArray(list) {
  let res = [];

  let temp = list;
  while (temp) {
    res.push(temp.val);
    temp = temp.next;
  }

  return res;
}

exports.ListNode = ListNode;
exports.arrayToList = arrayToList;
exports.listToArray = listToArray;
