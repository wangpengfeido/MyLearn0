var NameSpaceOne;
(function (NameSpaceOne) {
    var a = 1;
    NameSpaceOne.b = a + 1;
    NameSpaceOne.c = a + 2;
})(NameSpaceOne || (NameSpaceOne = {}));
console.log(NameSpaceOne.b, NameSpaceOne.c);
