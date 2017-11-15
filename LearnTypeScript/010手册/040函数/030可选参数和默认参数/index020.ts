namespace N010040030020 {
    //指定可选参数
    function a(x: number, y?: number) {
        return x + y;
    }

    a(1, 2);
    a(1);
    //不允许
    // a(1,2,3);
}