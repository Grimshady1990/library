const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let raisingSteam = new Book("Raising Steam", "Terry Prachet", 389, true);


function addBookToLibrary(addTitle, addAuthor, addPages, addRead) {
  this.addBook = new Book(addTitle, addAuthor, addPages, addRead);
  myLibrary.push(this.addBook);

}

addBookToLibrary("Test title", "test author", 687, false);
addBookToLibrary("Test title", "test author", 687, false);
addBookToLibrary("Test title", "test author", 687, false);
addBookToLibrary("Test title", "test author", 687, false);
console.log(myLibrary);