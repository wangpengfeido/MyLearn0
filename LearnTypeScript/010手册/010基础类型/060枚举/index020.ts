// 当枚举值枚举名互相查询有冲突时，以枚举名=>枚举值为准
enum A { A = 'B', B = 'C', C = 'A' }

console.log(A['A'], A['B'], A['C']);

