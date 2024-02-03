// fetch the book data

const bookListDiv = document.getElementById("book-list")

let bookData = [];

fetch("http://localhost:3000/books")
.then((response)=> response.json())
.then((bookResultData) => {
    bookData = bookResultData;
    for (const book of bookData) {
        displayBook(book)
    }
});



function displayBook(book) {
    document.body.innerHTML += `
        <div>
            <img src="http://localhost:3000/assets/images/${book.coverImg}" alt="A picture of a book">
            <p>${book.title}</p>
        </div>
    `;
    // const bookTitlePara = document.createElement("p");
    // bookTitlePara.innerText = book.title;
    // const bookImg = document.createElement("img");
    // bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`
    // bookImg.alt = "A picture of a book"
    // bookDiv.appendChild(bookImg);
    // bookDiv.appendChild(bookTitlePara);
    // bookListDiv.appendChild(bookDiv);
}

