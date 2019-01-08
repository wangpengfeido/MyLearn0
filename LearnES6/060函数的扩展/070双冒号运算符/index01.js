var a = "a1";
let obj = {
    a: "a2"
};

function saya() {
    console.log(this.a);
}

saya();
// (提案)使用双冒号运算符指定函数执行上下文，以取代call\apply\bind
obj::saya();