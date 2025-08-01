const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200 , {'Context-Type' : 'text/plain'});
        res.end('Welcome to the Home Page');
    }
    else if(url === '/about'){
        res.writeHead(200 , {'Context-Type' : 'text/plain'});
        res.end('Welcome to the About Page');
    }
})


const PORT = 3000;
server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})