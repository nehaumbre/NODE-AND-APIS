import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3004;

app.use(bodyParser.urlencoded({ extended: true }));

function generateBandName(req, res, next) {
  console.log(req.body);
  req.bandName = req.body.street + req.body.pet;
  next();
}

// app.use(generateBandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", generateBandName, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName}✌️</h2>`);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
