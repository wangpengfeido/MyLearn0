// 每本书包都含图书编号(isbn)、标题(title)这样的内部数据，和借出时间(checkoutDate)这样的外部数据
// 每一本书都需要存储自己的图书信息

// 这里的Book类表示的是每一本书
class Book {
  constructor(isbn, title, checkoutDate) {
    this.isbn = isbn;
    this.title = title;
    this.checkoutDate = checkoutDate;
  }
}








