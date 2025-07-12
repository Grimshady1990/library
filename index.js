const myLibrary = [];
let newEntries = [];

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-book");
const closeButton = document.querySelector("#submit-btn");







showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  
  event.preventDefault();
  dialog.close();
  
  const inputTitle = document.querySelector("#form_title");
  const valueTitle = inputTitle.value;
  const inputAuthor = document.querySelector("#form_author");
  const valueAuthor = inputAuthor.value;
  const inputPages = document.querySelector("#form_pages");
  const valuePages = inputPages.value;
  const inputDesc = document.querySelector("#form_description");
  const valueDesc = inputDesc.value;

  const readInput = document.querySelector("input[name='radio-btn']:checked");
  const readValue = readInput.value;
  addNewBookToLibrary(valueTitle, valueAuthor, valuePages, valueDesc, readValue)
  displayNewBook();
  newEntries=[];
  document.querySelector("#radio-yes").checked=false;
  document.querySelector("#radio-no").checked=false;
  
  
  
});

function Book(title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(addTitle, addAuthor, addPages, addDescription) {
  this.title = new Book(addTitle, addAuthor, addPages, addDescription,);
  myLibrary.push(this.title);
}

function addNewBookToLibrary(addTitle, addAuthor, addPages, addDescription, addRead) {
  this.title = new Book(addTitle, addAuthor, addPages, addDescription, addRead);
  newEntries.push(this.title);
}

addBookToLibrary("Journeys Out of the Body", "Robert Monroe", 288, "Groundbreaking account of Monroe’s out-of-body experiences and consciousness exploration.");

addBookToLibrary("Raising Steam", "Terry Pratchett", 384, "Moist von Lipwig tackles industrial revolution on Discworld with steam locomotive.");

addBookToLibrary("The 5 AM Club", "Robin Sharma", 336, "routine to maximize productivity by waking at 5 AM for growth and discipline.");

addBookToLibrary("The Way of Zen", "Alan Watts", 256, "Explores Zen’s origins, principles, and practices in a clear, modern voice.");

console.log(myLibrary);


//***************************************
// Test function that loops through array
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
//****************************************

function displayBook(){
  
  myLibrary.forEach(book => {
  

    // This div is the main container for all the "display" variables
    const mainContainer = document.querySelector("#grid-container");
    const frontCover = document.createElement("div")
    // **************************************************************

    const displayTitle = document.createElement("div");
    const displayAuthor = document.createElement("div");
    const displayPage = document.createElement("div");
    const displayDescription = document.createElement("div");
    const displayId = document.createElement("div");
    
    const readLabel = document.createElement("label");
    const displayRead = document.createElement("input");
    const readSpan = document.createElement("span");
    const displayDelete = document.createElement("button");
    const readDelete = document.createElement("div")

    displayTitle.textContent = `Title: ${book.title}`;
    displayAuthor.textContent = `Author: ${book.author}`;
    displayPage.textContent = `Page Count: ${book.pages}`;
    
    displayDescription.textContent = `Description: ${book.description}`;
    displayId.textContent = `ID: ${book.id}`;
    displayDelete.textContent = "Delete"

    frontCover.setAttribute("id", "front-cover");
    displayDelete.setAttribute("id", "delete-button");
    displayDelete.setAttribute("data-id", `${book.id}`);
    frontCover.setAttribute("data-id", `${book.id}`);
    displayTitle.classList.add("cover-content");
    displayAuthor.classList.add("cover-content");
    displayPage.classList.add("cover-content");
    displayRead.classList.add("cover-content");
    displayDescription.classList.add("cover-content");
    displayId.classList.add("cover-content");
    
    displayRead.setAttribute("type", "checkbox");
    readLabel.classList.add("switch-yes");
    readSpan.classList.add("slider-yes", "round-yes")
    readDelete.setAttribute("id", "read-delete")

    document.body.appendChild(mainContainer);
    mainContainer.appendChild(frontCover);
    frontCover.appendChild(displayTitle);
    frontCover.appendChild(displayAuthor);
    frontCover.appendChild(displayPage);
    frontCover.appendChild(displayDescription);
    frontCover.appendChild(displayId);
    frontCover.appendChild(readDelete);
    readDelete.appendChild(readLabel);
    readLabel.appendChild(displayRead);
    readLabel.appendChild(readSpan);
    readDelete.appendChild(displayDelete);
    

    displayDelete.addEventListener("click", () => {

        frontCover.remove();
});
    
  })
  
}



function displayNewBook(){

    newEntries.forEach(book => {

  
  

    // This div is the main container for all the "display" variables
    const mainContainer = document.querySelector("#grid-container");
    const frontCover = document.createElement("div")
    // **************************************************************

    const readValue = document.querySelector("input[name='radio-btn']:checked").value;

    const displayTitle = document.createElement("div");
    const displayAuthor = document.createElement("div");
    const displayPage = document.createElement("div");
    const displayDescription = document.createElement("div");
    const displayId = document.createElement("div");
    
    
    const displayDelete = document.createElement("button");
    const readDelete = document.createElement("div")

    displayTitle.textContent = `Title: ${book.title}`;
    displayAuthor.textContent = `Author: ${book.author}`;
    displayPage.textContent = `Page Count: ${book.pages}`;
    
    displayDescription.textContent = `Description: ${book.description}`;
    displayId.textContent = `ID: ${book.id}`;
    displayDelete.textContent = "Delete"

    frontCover.setAttribute("id", "front-cover");
    displayDelete.setAttribute("id", "delete-button");
    displayDelete.setAttribute("data-id", `${book.id}`);
    frontCover.setAttribute("data-id", `${book.id}`);
    displayTitle.classList.add("cover-content");
    displayAuthor.classList.add("cover-content");
    displayPage.classList.add("cover-content");
    
    displayDescription.classList.add("cover-content");
    displayId.classList.add("cover-content");
    
    
    readDelete.setAttribute("id", "read-delete")

    document.body.appendChild(mainContainer);
    mainContainer.appendChild(frontCover);
    frontCover.appendChild(displayTitle);
    frontCover.appendChild(displayAuthor);
    frontCover.appendChild(displayPage);
    frontCover.appendChild(displayDescription);
    frontCover.appendChild(displayId);
    frontCover.appendChild(readDelete);
    
   
    

    if (readValue === "yes") {
      const readLabel = document.createElement("label");
      const displayRead = document.createElement("input");
      const readSpan = document.createElement("span");
      displayRead.classList.add("cover-content");
      displayRead.setAttribute("type", "checkbox");
      readLabel.classList.add("switch-yes");
      readSpan.classList.add("slider-yes", "round-yes")
      readDelete.appendChild(readLabel);
      readLabel.appendChild(displayRead);
      readLabel.appendChild(readSpan);

    } else {

      const readLabel = document.createElement("label");
      const displayRead = document.createElement("input");
      const readSpan = document.createElement("span");
      displayRead.classList.add("cover-content");
      displayRead.setAttribute("type", "checkbox");
      readLabel.classList.add("switch");
      readSpan.classList.add("slider", "round")
      readDelete.appendChild(readLabel);
      readLabel.appendChild(displayRead);
      readLabel.appendChild(readSpan);


    }
    
    readDelete.appendChild(displayDelete);

    displayDelete.addEventListener("click", () => {

        frontCover.remove();
});
})
}






displayBook();





