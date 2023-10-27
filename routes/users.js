import express from "express";
// import { users } from "../mock-users.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
let users = [];

router.get("/", (req, res) => {
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
  if (getUser) {
    return res.send(getUser);
  } else {
    throw new Error("User could not found");
  }
});

router.delete("/:id", (req, res) => {
  const paramID = req.params.id;
  users = users.filter((user) => user.id !== paramID);
  return res.send(`user ${paramID} removed from database`);
});

router.patch("/:id", (req, res) => {
  const paramID = req.params.id;
  const user = users.find((user) => user.id === paramID);
  if (!user) {
    return res.status(404).send("User not found");
  }
  
  user.username = req.body.username;
  user.email = req.body.email;
  user.age = req.body.age;

  console.log(
    `username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`
  );

  return res.send(`User with ID ${paramID} updated`);
});

export default router;
