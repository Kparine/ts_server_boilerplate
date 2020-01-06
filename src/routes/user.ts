import { Router } from "express";
import { createUser, getUser } from "../controllers/user";

export const userRouter: Router = Router();

userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
