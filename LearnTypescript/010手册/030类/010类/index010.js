var N030010010;
(function (N030010010) {
    var A = (function () {
        function A(x) {
            this.x = x;
        }
        A.prototype.y = function () {
            return 'hello' + this.x;
        };
        return A;
    }());
    var a = new A('world');
    console.log(a.y());
})(N030010010 || (N030010010 = {}));
