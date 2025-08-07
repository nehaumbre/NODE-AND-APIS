import express from "express";
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("This is Home page"));

app.get("/about", (req, res) => res.send("This is About Page"));

app.get("/contact", (req, res) => res.send("This is Contact Page"));


app.get("/blog", (req, res) => res.send("This is Blog Page"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
