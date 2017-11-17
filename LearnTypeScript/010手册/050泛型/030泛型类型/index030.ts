namespace N010050030030 {
    //可以把泛型当作接口的一个参数
    //这样接口的其他成员也可以访问这个泛型
    interface Indentity<T> {
        <T>(arg: T): T;
    }

    function identity<T>(arg: T): T {
        return arg;
    }

    //使用
    let myIdentity1:Indentity<string> = identity;

    console.log(myIdentity1('hello'));
    console.log(myIdentity1(123));
}