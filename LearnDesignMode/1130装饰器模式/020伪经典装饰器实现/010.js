var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MacBookPro = /** @class */ (function () {
    function MacBookPro() {
    }
    MacBookPro.prototype.addEngraving = function () {
    };
    MacBookPro.prototype.addRam = function () {
    };
    MacBookPro.prototype.addSoftware = function () {
    };
    MacBookPro.prototype.getPrice = function () {
        return 100;
    };
    return MacBookPro;
}());
var MacBookDecorator = /** @class */ (function () {
    function MacBookDecorator(macBook) {
        this.macBook = macBook;
    }
    MacBookDecorator.prototype.addEngraving = function () {
        return this.macBook.addEngraving();
    };
    MacBookDecorator.prototype.addRam = function () {
        return this.macBook.addRam();
    };
    MacBookDecorator.prototype.addSoftware = function () {
        return this.macBook.addSoftware();
    };
    return MacBookDecorator;
}());
var RamDecorator = /** @class */ (function (_super) {
    __extends(RamDecorator, _super);
    function RamDecorator(macBook) {
        return _super.call(this, macBook) || this;
    }
    RamDecorator.prototype.addRam = function () {
        return this.macBook.addRam() + 'ram added';
    };
    RamDecorator.prototype.getPrice = function () {
        return this.macBook.getPrice() + 10;
    };
    return RamDecorator;
}(MacBookDecorator));
var myMacBookPro = new RamDecorator(new MacBookPro());
console.log(myMacBookPro.getPrice());
