// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import authModel from "../models/auth";
// import { IUser } from "../types";

// export const login = (req: Request, res: Response, next: void) => {
//     if (!req.body.email || !req.body.password) {
//         return { status: 400, message: "Bad Request" };
//     }

//     authModel
//         .login(req.body.email, req.body.password, next)
//         .then((user: IUser) => {
//             const token = jwt.sign({ id: user.id }, process.env.SECRET);
//             return res.status(200).send({ token });
//         })
//         .catch(next);
// };
