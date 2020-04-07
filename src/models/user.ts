import bcrypt from "bcryptjs";
import short from "short-uuid";
import { IPostUser, IUser } from "../types";
import * as data from "../users.json";

let users: IUser[] = data.user;

export const getUsers = (): IUser[] => {
    return users;
};

export const getUser = (id: string): IUser | null => {
    let search: null | IUser = null;
    users.filter((user) => {
        if (user.id === id) {
            search = user;
            return search;
        }
    }, null);
    return search;
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

export const updateUser = (newUser: IUser): IUser | null => {
    let found: null | IUser = null;
    const newUsers: IUser[] = users.filter((user) => {
        user.id === newUser.id;
    });

    //find the user by id

    // update the user fields

    // return user

    // .filter(user => user.id === users.id ) => {
    //     console.log("user ******------>>>>>>", user);

    //     if (user.id === newUser.id) {
    //         console.log("newUser.id ******------>>>>>>", newUser.id);
    //         console.log("user ******------>>>>>>", user);

    //         // console.log("found ******------>>>>>>", found);
    //         // console.log("newUser ******------>>>>>>", newUser);

    //         found = newUser;
    //         return newUser;
    //     }
    //     return user;
    // });
    users = newUsers;

    return found;
};

// Update is currently creating a new user and not hashing the password
