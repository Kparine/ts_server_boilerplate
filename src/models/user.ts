import bcrypt from "bcryptjs";
import short from "short-uuid";
import { IPostUser, IUser } from "../types";
import * as data from "../users.json";

const users: IUser[] = data.user;

export const getUsers = (): IUser[] => {
    return users;
};

export const getUser = (id: string): IUser | null => {
    for (const user of users) {
        if (user.id === id) {
            return user;
        }
    }
    return null;
};

export const createUser = async (createdUser: IPostUser): Promise<string> => {
    const emailAlreadyInUse = await confirmUserEmail(createdUser.userEmail);
    if (emailAlreadyInUse === true) {
        throw { status: 400, message: "Email is already in use" };
    } else {
        const id: string = short.uuid();
        const userHashPw: string = await bcrypt.hash(createdUser.userPassword, 10);
        delete createdUser.userPassword;
        const newUser: IUser = { id, userHashPw, ...createdUser };
        users.push(newUser);
        return id;
    }
};

export const confirmUserEmail = async (userEmail: string): Promise<boolean> => {
    for (const user of users) {
        if (user.userEmail === userEmail) {
            return true;
        }
    }
    return false;
};
