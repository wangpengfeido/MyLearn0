/**
 * Created by w1036_000 on 2016/11/30.
 */
const a={};

//常量只保证地址不变
a.name='wang';
console.log(a);

//报错
// a={};

////////////////////////////////////
// freeze可以冻结对象
const b=Object.freeze({});
//严格模式下报错，常规模式不起作用
b.name="wang";