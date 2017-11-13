namespace N010040030030 {
    //默认参数不一定放在最后，可以使用undefined来使用默认参数
    function a(x: number = 0, y: number) {
        return x + y;
    }

    console.log(a(1, 2));
    console.log(a(undefined,2));
    //不允许
    // console.log(a(1));
    // a(1,2,3);
}