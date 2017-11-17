namespace N010050050020 {

    //约束key必须是obj的属性名
    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    let x = {a: 1, b: 2, c: 3};

    console.log(getProperty(x,'a'));
    //不允许
    // console.log(getProperty(x,'m'));
}