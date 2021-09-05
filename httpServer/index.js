const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Welcome to home page :)");

    } else if (req.url == "/contect") {
        res.end("Welcome to contect page");
    } else {
        res.writeHead(404);
        res.end("<h1> 404 Error </h1>");
    }
    // re.end("Hello this is mohit and welcome to listing port 8000 :)");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listing to the port 8000");
});
