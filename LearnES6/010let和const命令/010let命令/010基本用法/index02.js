/**
 * Created by w1036_000 on 2016/11/29.
 */
for(let i=0;i<10;i++){}
console.log(i);

//////////////////////////////////////
// 这样的原因时let声明在块级作用域内有效
var a=[];
for(var i=0;i<10;i++){
    a[i]=function () {
        console.log(i);
    }
}
a[6]();  // 10
////
var b=[];
for(let j=0;j<10;j++){
    b[j]=function () {
        console.log(j);
    }
}
b[6]();  // 6




