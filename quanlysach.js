let bookArray = [];
let i = 0;
let data='';
function showBook() {
        for (i = 0; i < bookArray.length; i++) {
                data += bookArray[i];
                data += "<button onclick='editBook();'>edit</button>";
                data += "<button onclick='deleteBook();'>delete</button><br/>";
        }
        document.getElementById("book").innerHTML = data ;
}
function addBook() {
        let name = document.getElementById("input").value;
        bookArray.push(name);
        document.getElementById("sum").innerHTML = bookArray.length;
        //document.getElementById("book").innerHTML = bookArray + data;
        data='';
        showBook();
}
function deleteBook(num) {
        bookArray.splice(num,1);
        data='';
        showBook();
}
function editBook(num){
        bookArray.splice(num,1,prompt());
        data='';
        showBook();
}