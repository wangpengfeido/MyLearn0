namespace N010020010020 {
    interface I {
        attrOne: string;
        attrTwo: number;

        [popName: string]: any;           //字符串索引签名
    }

    function test(param: I): { num: number } {
        //此时使用param.attrThree是允许的
        console.log(param.attrOne, param.attrTwo,param.attrThree);

        return {num: 3};
    }

    //允许
    //test({attrOne: 'aaa', attrTwo: 1,});

    //允许
    //test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'});

    //允许
    //test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'} as I);

    //允许
    // let o = {attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'};
    // test(o);

    //允许
    //test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb',attrFour:'ccc'});

}
