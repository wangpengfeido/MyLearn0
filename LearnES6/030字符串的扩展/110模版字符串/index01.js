let name = "wang";
console.log(`my name is ${name}`);

// 空格和换行会保留
console.log(`<div>
    <div></div>
</div>`);

//表达式
console.log(`${1 + 2}`);

//函数调用
console.log(`函数调用：${(()=>2)()}`);

//模板字符串可嵌套
console.log(`嵌套：${`123${`!`}`}b`)