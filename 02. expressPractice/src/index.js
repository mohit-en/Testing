const expresss = require("express");
const path = require("path");
const hbs = require("hbs");
const app = expresss();
const port = 8000;

// console.log(path.join(__dirname, "../public/"));
// const staticpath = path.join(__dirname, "../public/");
// console.log(staticpath);

// app.use(expresss.static(staticpath));

app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "../templete/partials/"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "../templete/index"), {
    name: "Mohit mistry...",
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello express");
// });

app.listen(port, () => {
  console.log(`Listing port number ${port}`);
});
