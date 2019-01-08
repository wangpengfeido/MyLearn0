// 与函数的name属性一样，方法的name属性返回方法名
let obj={
    sayName(){
        console.log(arguments.callee.name);
    }
};
console.log(obj.sayName.name);
obj.sayName();

// bind过的方法，Function构造的方法细节与函数name相同
