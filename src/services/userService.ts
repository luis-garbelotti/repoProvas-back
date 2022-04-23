import { User } from "@prisma/client";
import * as userRepository from '../repositories/userRepository.js';
import * as hashDataUtils from "../utils/hashDataUtils.js";

export type CreateUserData = Omit<User, "id">;

export async function createUser(user: CreateUserData) {
    await verifyByEmail(user.email)
    const hashedPassword = hashDataUtils.hashData(user.password);
    await userRepository.insert({...user, password: hashedPassword}); 
}

async function verifyByEmail(email: string) {
    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
        throw { type: "conflict", message: "Users must have unique emails" }
    }
}