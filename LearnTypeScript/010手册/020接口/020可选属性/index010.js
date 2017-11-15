var N010020020010;
(function (N010020020010) {
    function test(param) {
        console.log(param.attrOne, param.attrTwo);
        return { num: 3 };
    }
    var o = { attrOne: 'aaa' };
    test(o);
})(N010020020010 || (N010020020010 = {}));
