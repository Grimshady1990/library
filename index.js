const myLibrary = [];

function Book(title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(addTitle, addAuthor, addPages, addDescription, addRead) {
  this.title = new Book(addTitle, addAuthor, addPages, addDescription, addRead);
  myLibrary.push(this.title);
}

addBookToLibrary("Journeys Out of the Body", "Robert Monroe", 288, "Groundbreaking account of Monroe’s out-of-body experiences and consciousness exploration.", true);

addBookToLibrary("Raising Steam", "Terry Pratchett", 384, "Moist von Lipwig tackles industrial revolution on Discworld with steam locomotive.", true);

addBookToLibrary("The 5 AM Club", "Robin Sharma", 336, "routine to maximize productivity by waking at 5 AM for growth and discipline.", true);


addBookToLibrary("The Way of Zen", "Alan Watts", 256, "Explores Zen’s origins, principles, and practices in a clear, modern voice.", false);
console.log(myLibrary);


function displayBookTest(){
myLibrary.forEach(book => {
  console.log(`Title: ${book.title} 
Author: ${book.author}
Page Count: ${book.pages}
Description: ${book.description}
Read: ${book.read}
ID: ${book.id}`);
});
}

displayBookTest();


