import express from "express";
import morgan from "morgan";

const app = express();
const port = 3003;

app.use(morgan('tiny'))

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get('/test', (req, res) => {
  res.send('Test route');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
