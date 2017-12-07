var NamespaceThree;
(function (NamespaceThree) {
    var NamespaceFour;
    (function (NamespaceFour) {
        NamespaceFour.i = 0;
    })(NamespaceFour = NamespaceThree.NamespaceFour || (NamespaceThree.NamespaceFour = {}));
})(NamespaceThree || (NamespaceThree = {}));
//可以使用import为命名空间指定别名
var NF = NamespaceThree.NamespaceFour;
console.log(NF.i);
