// 可以把Generator看做类似数组的结构
let generator=function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};
for(let item of generator()){
    console.log(item);
}


