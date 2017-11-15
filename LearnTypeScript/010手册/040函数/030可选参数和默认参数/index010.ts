namespace N010040030010 {
    //传递给一个函数的参数个数必须与函数期望的参数个数一致
    function a(x: number, y: number) {
        return x + y;
    }

    a(1, 2);
    //不允许
    // a(1);
    // a(1,2,3);
}