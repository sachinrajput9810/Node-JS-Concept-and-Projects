const http = require('http');

const server = http.createServer((req , res) => {
    console.log('Request received - ' , req);
    res.writeHead(200 , {'Context-Type' : 'text/plain'})
    res.end("My http response")
} )



const port = 3000
server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})