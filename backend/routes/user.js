import express from "express";
import { deleteUser } from "../controllers/user.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/delete/:id", verifyToken, deleteUser);

export default router;