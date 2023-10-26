import express from "express";
import { users } from "../mock-users.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuidv4() });
  res.send(`user ${newUser.username} added to database`);
});

router.get("/:id", (req, res) => {
  const paramID = req.params.id;
  const getUser = users.find((user) => user.id === paramID);
  console.log(getUser)
  res.send(getUser);
});

export default router;
