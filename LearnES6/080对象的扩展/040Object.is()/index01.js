// Object.is 行为基本与===一致
// 不同的是，+0不等于-0，NaN等于自身
console.log(+0===-0);
console.log(Object.is(+0,-0));
console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));