import { client } from "../database.js";
import { CreateUserData } from "../services/userService.js";

export async function findByEmail(email: string) {
    const user = await client.user.findUnique({
        where: {
            email
        }
    });
    return user;
}

export async function insert(user: CreateUserData) {
    await client.user.create({
        data: user
    });
}