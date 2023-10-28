import { v4 as uuidv4 } from "uuid";
import { users as db } from "../db/mock-users.js";
let users = [...db];

export function getAllUsers(req, res) {
  res.send(users);
}

export function createUser(req, res) {
  try {
    const newUserBody = req.body;
    if (!newUserBody.username || !newUserBody.email || !newUserBody.age) {
      return res.status(400).send({
        message: "Send all required fields: name, email, age",
      });
    }

    const newUser = {
      username: newUserBody.username,
      email: newUserBody.email,
      age: newUserBody.age,
    };

    users.push({ ...newUser, id: uuidv4() });
    res.send(`user ${newUser.username} added to database`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

export function getUser(req, res) {
  try {
    const paramID = req.params.id;
    const getUser = users.find((user) => user.id === paramID);
    if (!getUser) {
      return res.status(400).send({
        message: "User not found",
      });
    }
    return res.send(getUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

export function deleteUser(req, res) {
  try {
    const paramID = req.params.id;
    const getUser = users.find((user) => user.id === paramID);
    if (!getUser) {
      return res.status(400).send({
        message: "User not found",
      });
    }
    users = users.filter((user) => user.id !== getUser.id);
    return res.send(`user ${paramID} removed from database`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

export function updateUser(req, res) {
  try {
    const paramID = req.params.id;
    const user = users.find((user) => user.id === paramID);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const { username, email, age } = req.body;

    if (!username || !email || !age) {
      return res.status(400).send({
        message: "Send all required fields: username, email, age",
      });
    }

    user.username = username;
    user.email = email;
    user.age = age;

    return res.send(`User with ID ${paramID} updated`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}
