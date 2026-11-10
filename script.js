
let books = [];

function addBook() {

    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    if (id === "" || name === "" || author === "") {
        alert("Please enter all book details!");
        return;
    }

    if (books.some(book => book.id === id)) {
        alert("Book ID already exists!");
        return;
    }

    let book = {
        id: id,
        name: name,
        author: author
    };

    books.push(book);

    displayBooks();

    document.getElementById("bookId").value = "";
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";

    alert("Book Registered Successfully!");
}

function displayBooks(data = books) {

    let list = document.getElementById("bookList");

    list.innerHTML = "";

    data.forEach((book) => {

        let row = `
            <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>
                    <button class="delete-btn"
                    onclick="deleteBook('${book.id}')">
                    Delete
                    </button>
                </td>
            </tr>
        `;

        list.innerHTML += row;
    });
}


function searchBook() {

    let searchValue = document
        .getElementById("search")
        .value.toLowerCase();

    let result = books.filter(book =>
        book.name.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue) ||
        book.id.toLowerCase().includes(searchValue)
    );

    displayBooks(result);

    if (result.length === 0) {
        alert("No Book Found!");
    }
}
