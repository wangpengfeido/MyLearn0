
//报错，rest参数必须是最后一个
// let fn1=(a,...b,c)=>{};

///////////////////////////////////////////
//    rest参数不计入length属性
let fn2=(a,b,...c)=>{};
console.log(fn2.length);

