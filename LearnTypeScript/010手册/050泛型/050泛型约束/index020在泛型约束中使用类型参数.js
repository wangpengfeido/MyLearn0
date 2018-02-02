var N010050050020;
(function (N010050050020) {
    //约束key必须是obj的属性名
    function getProperty(obj, key) {
        return obj[key];
    }
    var x = { a: 1, b: 2, c: 3 };
    console.log(getProperty(x, 'a'));
    //不允许
    // console.log(getProperty(x,'m'));
})(N010050050020 || (N010050050020 = {}));
