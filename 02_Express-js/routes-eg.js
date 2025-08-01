const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to home page!');
});

app.get("/products" , (req , res) => {
    const products = [
        {id : 1 , name : "Laptop" , price : 1000},
        {id : 2 , name : "Phone" , price : 500},
        {id : 3 , name : "Tablet" , price : 300} ,
        {id : 4 , name : "Monitor" , price : 200}
    ];
    res.json(products);
})


// get product by id
app.get("/products/:id" , (req , res) => {
    const productId = req.params.id ;
    const products = [
        {id : 1 , name : "Laptop" , price : 1000},
        {id : 2 , name : "Phone" , price : 500},
        {id : 3 , name : "Tablet" , price : 300} ,
        {id : 4 , name : "Monitor" , price : 200}
    ];
    const product = products.find(p => p.id == productId);
    if(product) {
        res.send(product)
    }
    else{
        res.status(404).send("Product not found")
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
