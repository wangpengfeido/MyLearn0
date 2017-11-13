namespace N010020010010 {
    interface I {
        attrOne: string;
        attrTwo: number;
    }

    function test(param: I): { num: number } {
        console.log(param.attrOne, param.attrTwo);

        return {num: 3};
    }

    //允许
    test({attrOne: 'aaa', attrTwo: 1,});

    //不允许
    //test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'});

    //允许
    test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'} as I);

    //允许
    // let o = {attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'};
    // test(o);

}
