var N010020010010;
(function (N010020010010) {
    function test(param) {
        console.log(param.attrOne, param.attrTwo);
        return { num: 3 };
    }
    //允许
    test({ attrOne: 'aaa', attrTwo: 1, });
    //不允许
    //test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'});
    //允许
    test({ attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb' });
    //允许
    // let o = {attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'};
    // test(o);
})(N010020010010 || (N010020010010 = {}));
