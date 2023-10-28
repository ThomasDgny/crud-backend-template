import { v4 as uuidv4 } from "uuid";
import { users as db } from "../db/mock-users.js";
import { responseMessage } from "../utils/response-message.js";
let users = [...db];

export function getAllUsers(req, res) {
  res.send(users);
}

export function createUser(req, res) {
  try {
    const newUserBody = req.body;
    if (!newUserBody.username || !newUserBody.email || !newUserBody.age) {
      return responseMessage(
        res,
        404,
        "Send all required fields: name, email, age"
      );
    }

    const newUser = {
      username: newUserBody.username,
      email: newUserBody.email,
      age: newUserBody.age,
    };

    users.push({ ...newUser, id: uuidv4() });
    return responseMessage(
      res,
      200,
      `user ${newUser.username} added to database`,
      newUser
    );
  } catch (error) {
    return responseMessage(res, 500, error.message);
  }
}

export function getUser(req, res) {
  try {
    const paramID = req.params.id;
    const getUser = users.find((user) => user.id === paramID);
    if (!getUser) {
      return responseMessage(res, 404, "User not found");
    }
    return responseMessage(res, 200, `user found`, getUser);
  } catch (error) {
    return responseMessage(res, 500, error.message);
  }
}

export function deleteUser(req, res) {
  try {
    const paramID = req.params.id;
    const getUser = users.find((user) => user.id === paramID);
    if (!getUser) {
      return responseMessage(res, 404, "User not found");
    }
    users = users.filter((user) => user.id !== getUser.id);
    return responseMessage(res, 200, `user ${paramID} removed from database`);
  } catch (error) {
    return responseMessage(res, 500, error.message);
  }
}

export function updateUser(req, res) {
  try {
    const paramID = req.params.id;
    const user = users.find((user) => user.id === paramID);
    if (!user) {
      return responseMessage(res, 404, "User not found");
    }
    const { username, email, age } = req.body;

    if (!username || !email || !age) {
      return responseMessage(
        res,
        404,
        "Send all required fields: name, email, age"
      );
    }
    const newUser = {
      username: (user.username = username),
      email: (user.email = email),
      age: (user.age = age),
    };
    return responseMessage(
      res,
      200,
      `User with ID ${paramID} updated`,
      newUser
    );
  } catch (error) {
    return responseMessage(res, 500, error.message);
  }
}
