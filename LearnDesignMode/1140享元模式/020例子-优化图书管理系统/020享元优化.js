// 现在，图书的内部数据是共享的了，每一


// 这里的Book类表示的是每一种书
class Book {
  static existingBooks = new Map();

  constructor(isbn, title,) {
    this.isbn = isbn;
    this.title = title;
  }

  static createBook(isbn, title) {
    let book = Book.existingBooks.get(isbn);
    if (!book) {
      book = new Book(isbn, title);
      this.existingBooks.set(isbn, book);
    }
    return book;
  }
}

class BookRecordManager {
  static bookRecordDatabase = {};

  // 添加新书到图书馆
  static addBookRecord(id, isbn, title, checkoutDate) {
    const book = Book.createBook(id, isbn, title, checkoutDate);
    BookRecordManager.bookRecordDatabase[id] = {
      book,
      checkoutDate
    }
  }

  // 更新借出信息
  static updateCheckoutDate(id, checkoutDate) {
    BookRecordManager.bookRecordDatabase[id].checkoutDate = checkoutDate;
  }

}
