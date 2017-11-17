namespace N010050030010 {
    function identity<T>(arg: T): T {
        return arg;
    }

    //泛型函数的类型
    let myIdentity1: <T>(arg: T) => T = identity;
    //可以使用不同的参数名
    let myIdentity2: <U>(arg: U) => U = identity;
    //可以使用带有调用签名的对象字面量定义泛型函数
    let myIdentity3: { <T>(arg: T): T } = identity;
}