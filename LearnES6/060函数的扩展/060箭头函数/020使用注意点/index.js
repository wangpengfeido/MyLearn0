/**
 * Created by w1036_000 on 2016/11/30.
 */
//箭头函数的this就是外层代码的this，箭头函数没有自己的this
function foo() {
    setTimeout(()=>{
        console.log('id:',this.id);
    },100);
}
function foo2() {
    setTimeout(function () {
        console.log('id2:',this.id);
    },500)
}
var id=21;
foo();
foo.call({id:42});
/////////////////////////////
foo2();
foo2.call({id:42});



