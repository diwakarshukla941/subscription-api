import { Router } from "express";
import {authorize}  from "../Middleware/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";
const userRouter = Router();

// GET /users ---> Get All Users
// GET  /users/:id ---> Get User By ID
userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ title: "Create New User" }));
userRouter.put("/:id", (req, res) => res.send({ title: "Update User" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "Delete User" }));

export default userRouter;
