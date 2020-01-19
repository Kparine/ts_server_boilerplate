import * as express from "express";
import * as userModel from "../models/user";
import { IUser } from "../types";

export const getUsers: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const users: IUser[] = userModel.getUsers();
        if (!users) {
            res.status(404);
        }
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send();
    }
};

export const getUser: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const user: IUser | null = userModel.getUser(req.params.id);
        if (!user) {
            res.status(404).send({ status: 400, message: "User Does Not Exist" });
        } else {
            res.status(200).send(user);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

export const createUser: express.RequestHandler = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const userId: string = await userModel.createUser(req.body);
        if (!userId) {
            res.status(404).send({ status: 400, message: "Unable to create user" });
        }
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
};
