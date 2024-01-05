const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

let bookContainer = document.querySelector(".book-container");
    console.log(bookContainer);

let html = "";

const booksTotal = books.length;
    console.log(booksTotal);

for(let i = 0; i < booksTotal; i++) {
    console.log(books[i]);
    html += `
            <div>
                <h1>${books[i].title}</h1>
                <h3>${books[i].author}</h3>
                <p>${books[i].available}</p>
            </div>
    `;
    console.log(html);
}

bookContainer.innerHTML = html;