// 可以为一个函数提供多个函数定义。
// 调用时匹配第一个匹配的定义。因此，更精确的定义要放在上面

// 注意：最后一个```` getNum(num): any````并不是函数的重载

function getNum(num: { num: number }): number;
function getNum(num: string): number;
function getNum(num: number): number;
function getNum(num): number {
  if (typeof num === "object") {
    return num.num;
  } else if (typeof num === "string") {
    return Number(num);
  } else {
    return num;
  }
}

console.log(getNum(1));
console.log(getNum("1"));
console.log(getNum({ num: 1 }));
