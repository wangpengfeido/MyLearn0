namespace N010050030020 {
    //定义泛型函数接口
    interface Indentity {
        <T>(arg: T): T;
    }

    function identity<T>(arg: T): T {
        return arg;
    }

    //使用
    let myIdentity1: Indentity = identity;

    console.log(myIdentity1('hello'));
    console.log(myIdentity1(123));
}