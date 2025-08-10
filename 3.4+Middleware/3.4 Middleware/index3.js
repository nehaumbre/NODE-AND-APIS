import express from "express";

const app = express();
const port = 3004;

const logger = function (req, res, next) {
  console.log("Middleware executed with method and URL", req.url +" |"+ req.method);
  next();
};


app.use(logger);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
