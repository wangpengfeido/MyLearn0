var N010050030030;
(function (N010050030030) {
    function identity(arg) {
        return arg;
    }
    //使用
    var myIdentity1 = identity;
    console.log(myIdentity1('hello'));
    console.log(myIdentity1(123));
})(N010050030030 || (N010050030030 = {}));
