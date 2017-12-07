namespace N010110010010{
    //当一个对象实现了Symbol.iterator时，它是可迭代的
    //内置的有Array/Set/Map/String等

    let someArray=['a','b','c'];

    //for...of循环，调用对象上的Symbol.iterator方法
    for(let i of someArray){
        console.log(i);
    }

    //for...in循环的是键，for...of循环的是值
    for(let i in someArray){
        console.log(i);
    }
}