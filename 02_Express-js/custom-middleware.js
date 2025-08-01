const express = require('express');
const app = express();
const port = 3000;

const customTimeStampMiddleware = (req , res , next) => {
    const currentTime = new Date().toISOString();
    console.log(`Request received at: ${currentTime} from ${req.url} using ${req.method} method`);
    next(); // Call next() to pass control to the next middleware
}

app.use(customTimeStampMiddleware)

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