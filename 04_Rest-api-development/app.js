const express = require('express');
const app = express();
const port = 3000;

// middleware 
app.use(express.json());

const books = [
    {id: 1 , title: "Book One", author: "Author A"},
    {id: 2 , title: "Book Two", author: "Author B"},
    {id: 3 , title: "Book Three", author: "Author C"}
];

// get all books
app.get("/" , (req , res) => {
    res.status(200).json({
        message : "Welcome to the Book API",
    })
})

app.get("/get" , (req , res) => {
    res.json(books);
})

// get a book by id
app.get("/get/:id" , (req , res) => {
    const bookId = parseInt(req.params.id)
    const book = books.find(b => b.id === bookId);
    if(book){
        res.status(200).json(book)
    }
    else {
        res.status(400).json({
            message: "Book not found"
        })
    }
})

// add a new book
app.post("/add" , (req , res) => {
    const newBook = {
        id: books.length + 1 ,
        title : `Book ${books.length + 1}`,
        author : `Author ${String.fromCharCode(65 + books.length)}`
    }
    books.push(newBook)
    res.status(201).json({
        message: "Book added successfully",
        data: newBook
    })
})

// update a book by id
app.put("/update/:id" , (req , res) => {
    const currentBookIdx = books.findIndex(b => b.id === parseInt(req.params.id));
    if(currentBookIdx !== -1){
       
    }
    else{
        res.status(400).json({
            message: "Book not found"
        })
    }
})

// delete a book by id
app.delete("/delete/:id" , (req , res) => {
    const indexOfCurrentBook = books.findIndex(b => b.id === parseInt(req.params.id));
    if(indexOfCurrentBook !== -1){
        const deletedBook = books.splice(indexOfCurrentBook, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            data: deletedBook
        })
    }
    else{
        res.status(404).json({
            message: "Book not found"
        })
    }
})



app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});