import express, { Router } from "express";
import { getUsers, getUsersById,Register,  CreateUser, deleteUser, updateUser, Login } from "../controllers/Users.js";
import { verifytoken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users',verifytoken, getUsers);
router.get('/users/:id', getUsersById);
router.post('/register', Register);
router.post('/users', CreateUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', Login);
router.post('/token', refreshToken);


export default router;