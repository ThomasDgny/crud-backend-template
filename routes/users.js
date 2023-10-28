import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", (req, res) => getAllUsers(req, res));

router.post("/", (req, res) => createUser(req, res));

router.get("/:id", (req, res) => getUser(req, res));

router.delete("/:id", (req, res) => deleteUser(req, res));

router.put("/:id", (req, res) => updateUser(req, res));

export default router;
