// 传统地，可以采用一系列回调函数，或promise来管理流程

// Generator 函数可以进一步改善代码运行流程。
let step = (index, params) => {
    console.log(index, params);
    return `${index},${params}`;
};

let longRunningTask = function* (value1) {
    try {
        let value2 = yield  step(1, value1);
        let value3 = yield step(2, value2);
        let value4 = yield step(3, value3);
    } catch (e) {}
};

let g1 = longRunningTask('a');
g1.next();
g1.next('b');
g1.next('c');

// 可以使用一个函数自动执行
function scheduler(task) {
    let stepResult = task.next(task.value);
    if(!stepResult.done){
        task.value=stepResult.value;  // 将上一步返回的值作为下一步的参数
        scheduler(task);
    }
}
scheduler(longRunningTask('a'));

// 注意：上面这种做法，只适合同步操作

