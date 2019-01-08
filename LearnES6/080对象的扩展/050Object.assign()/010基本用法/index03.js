 // assign只拷贝自身属性，不拷贝继承属性，也不拷贝不可枚举属性
function F() {
    this.a = 'aaa';
}
F.prototype.b = 'bbb';

let obj={
    name:'hi'
};
let obj2=new F();
console.log(Object.assign(obj,obj2));

