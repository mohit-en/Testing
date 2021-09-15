const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
console.log(static_path);

app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/weather", (req, res) => {
  res.send("this is weather page");
});

app.get("*", (req, res) => {
  res.send("this is 404 page");
});

app.listen(port, () => {
  console.log(`listing port number ${port}`);
});
