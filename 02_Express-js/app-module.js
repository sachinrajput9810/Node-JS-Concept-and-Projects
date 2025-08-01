const express = require('express');
const app = express();

// View engine setup
app.set('view engine' , 'ejs')

// app routes
app.get('/', (req, res) => {
    res.send('index')
})

app.post( "/api/data" , (req , res) => {
    res.json({
        message: 'Data received successfully!' ,
        data : req.body
    })
})