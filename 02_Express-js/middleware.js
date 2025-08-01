const express = require('express');
const app = express();
const port = 3000;

const myMiddleware = (req, res, next) => {
    console.log("First middleware executed");
    next(); // Call next() to pass control to the next middleware
}

app.use(myMiddleware); // Use the middleware for all routes

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get("/about" , (req , res) => {
    res.send('Welcome to the about page!');
})

app.get("/contact" , (req , res) => {
    res.send('Welcome to the contact page!');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});