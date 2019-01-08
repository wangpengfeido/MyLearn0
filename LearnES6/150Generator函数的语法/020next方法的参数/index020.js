// 要想第一次调用next就传入参数，可以在外面包一层
// 即自动调用一次next

function wrapper(generatorFunction) {
    return function (...args) {
        let generatorObject = generatorFunction(...args);
        generatorObject.next();
        return generatorObject;
    };
}

let generator = function* generator() {
    let v;
    while (true) {
        v = yield v;
    }
};
let wrapped = wrapper(generator);
let g = wrapped();
console.log(g.next('a'));
console.log(g.next('b'));
console.log(g.next('c'));

