const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/stuentData/stuentData.json`, "utf-8");
    const datajs = JSON.parse(data);
    if (req.url == "/") {
        res.end("Welcome to home page :)");

    } else if (req.url == "/contect") {
        res.end("Welcome to contect page");
    } else if (req.url == "/studentapi") {
        res.end(`<h1>Welcome to student data</h1> ${datajs[0].name}`);
    } else {
        res.end("<h1> 404 Error </h1>");
    }
    // re.end("Hello this is mohit and welcome to listing port 8000 :)");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listing to the port 8000");
});
