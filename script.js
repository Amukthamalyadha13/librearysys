
function addBook() {

    let name = document.getElementById("name").value;
    let bookname = document.getElementById("bookname").value;
    let authorname = document.getElementById("authorname").value;
    let booknumber = document.getElementById("booknumber").value;
    let section = document.getElementById("section").value;
    if ( name.length == 0 || bookname.length == 0 || authorname.length == 0 ||
        booknumber.length == 0 || section.length == 0) {
        alert("Please fill all details!");
    }
    else {
        document.getElementById("result").innerHTML =
            "<h2>Book Details</h2>" +
            "Name: " + name + "<br>" +
            "Book Name: " + bookname + "<br>" +
            "Author Name: " + authorname + "<br>" +
            "Book Number: " + booknumber + "<br>" +
            "Section: " + section;

    }
}