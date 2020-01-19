import { Router } from "express";
import { createUser, getUser, getUsers, updateUser } from "../controllers/user";

export const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
