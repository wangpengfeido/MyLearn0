
//es6中定义对象时，属性名允许使用表达式
let b = 'b';
let c = 'c';
let obj = {
    ['a' + b]: "ab",
    [c](){
        return 'ccc';
    }
};
console.log(obj);
console.log(obj.c());


