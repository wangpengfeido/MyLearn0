var N010050030020;
(function (N010050030020) {
    function identity(arg) {
        return arg;
    }
    //使用
    var myIdentity1 = identity;
    console.log(myIdentity1('hello'));
    console.log(myIdentity1(123));
})(N010050030020 || (N010050030020 = {}));
