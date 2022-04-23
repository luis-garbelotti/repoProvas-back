import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const user: userService.CreateUserData = req.body;

    await userService.createUser(user);

    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user: userService.CreateUserData = req.body;

    const token = await userService.signIn(user);

    res.send(token);
}