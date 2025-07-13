const myLibrary = [];

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-book");
const closeButton = document.querySelector("#submit-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();

  const inputTitle = document.querySelector("#form_title");
  const inputAuthor = document.querySelector("#form_author");
  const inputPages = document.querySelector("#form_pages");
  const inputDesc = document.querySelector("#form_description");
  const resetForm = document.querySelector("#book-form");

  if ((document.querySelector("#radio-yes").checked === false && document.querySelector("#radio-no").checked === false) || inputTitle.value === "" || inputAuthor.value === "" || inputPages.value === "" || inputDesc.value === "") {
    alert("Please fill the entire form");
    dialog.showModal();
    return;
  }
  
  const valueTitle = inputTitle.value;
  const valueAuthor = inputAuthor.value;
  const valuePages = inputPages.value;
  const valueDesc = inputDesc.value;
  const readInput = document.querySelector("input[name='radio-btn']:checked");
  const readValue = readInput.value;

  addBookToLibrary(valueTitle, valueAuthor, valuePages, valueDesc, readValue);
  displayBook();
  
  document.querySelector("#radio-yes").checked=false;
  document.querySelector("#radio-no").checked=false;
  
  resetForm.reset();  
});

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
  
  myLibrary.unshift(this.title);
}

addBookToLibrary("Journeys Out of the Body", "Robert Monroe", 288, "Groundbreaking account of Monroe’s out-of-body experiences and consciousness exploration.", "yes");
addBookToLibrary("Raising Steam", "Terry Pratchett", 384, "Moist von Lipwig tackles industrial revolution on Discworld with steam locomotive.", "no");
addBookToLibrary("The 5 AM Club", "Robin Sharma", 336, "routine to maximize productivity by waking at 5 AM for growth and discipline.", "no");
addBookToLibrary("The Way of Zen", "Alan Watts", 256, "Explores Zen’s origins, principles, and practices in a clear, modern voice.", "yes");

function displayBook(){
  removeElementsByClass("front-cover");

  myLibrary.forEach(book => {
    const mainContainer = document.querySelector("#grid-container");
    const frontCover = document.createElement("div")

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
    frontCover.classList.add("front-cover")
    displayDelete.classList.add("display-delete");
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

    if (book.read === "yes") {
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
    } 
    else {
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

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

displayBook();





