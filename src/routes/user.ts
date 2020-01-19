import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/user";

export const userRouter: Router = Router();

userRouter.get("/:id", getUser);
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
