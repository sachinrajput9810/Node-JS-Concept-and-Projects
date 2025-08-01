const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname , 'views'))

const products = [
    {name: "Product 1", price: 100},
    {name: "Product 2", price: 200},
    {name: "Product 3", price: 300}
];

app.get("/" , (req , res) => {
    res.render('home'  , {title : "Home Page" , products: products});
})

app.get("/about" , (req , res) => {
    res.render('about' , {title : "About Page"});
})


app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});