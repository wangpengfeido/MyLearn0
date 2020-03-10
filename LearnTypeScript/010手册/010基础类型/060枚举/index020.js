// 当枚举值枚举名互相查询有冲突时，以枚举名=>枚举值为准
var A;
(function (A) {
    A["A"] = "B";
    A["B"] = "C";
    A["C"] = "A";
})(A || (A = {}));
console.log(A['A'], A['B'], A['C']);
