import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello From server");
});

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
