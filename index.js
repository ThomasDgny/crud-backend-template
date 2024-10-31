import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import cors from "cors"

const app = express();
const PORT = 5000;

app.use(cors())
app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Home page");
});

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
  console.log(PORT)
});
