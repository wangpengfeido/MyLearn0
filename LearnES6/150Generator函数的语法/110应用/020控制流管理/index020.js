// 使用for循环提供更一般的流程管理控制
let createStep = (index) => {
    return (params) => {
        console.log(index, params);
        return `${index},${params}`;
    }
};

const iterateSteps = function* (steps) {
    for (let i = 0; i < steps.length; i++) {
        yield steps[i]();
    }
};

let steps = [createStep(1), createStep(2), createStep(3)];

let g = iterateSteps(steps);

g.next();
g.next();
g.next();

// 将任务分解成步骤之后，还可以将项目分解成多个依次执行的任务，每个任务包含多个步骤。
const iterateJobs = function* (jobs) {
    for (let i = 0; i < jobs.length; i++) {
        yield* iterateSteps(jobs[i].steps);
    }
};
let jobs=[
    {steps:[createStep(1), createStep(2), createStep(3)]},
    {steps:[createStep(4), createStep(5), createStep(6)]},
    {steps:[createStep(7), createStep(8), createStep(9)]},
];
// 可以用for...of循环一次性依次执行所有任务的所有步骤。
for(let step of iterateJobs(jobs)){
    console.log('.......',step);
}
