const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello this is mohit and welcome to listing port 8000 :)");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listing to the port 8000");
});
