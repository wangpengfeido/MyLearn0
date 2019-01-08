
function fn() {
    return "hi";
}
let obj={
    fn,
    // 方法也可以简写
    method(){
        return "hello";
    }
};
console.log(obj.fn());
console.log(obj.method());
