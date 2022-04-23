import { User } from "@prisma/client";
import * as userRepository from '../repositories/userRepository.js';
import * as hashDataUtils from "../utils/hashDataUtils.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export type CreateUserData = Omit<User, "id">;

export async function createUser(user: CreateUserData) {
    const existingUser = await verifyByEmail(user.email);
    if (existingUser) {
        throw { type: "conflict", message: "Users must have unique emails" }
    }

    const hashedPassword = hashDataUtils.hashData(user.password);
    await userRepository.insert({...user, password: hashedPassword}); 
}

async function verifyByEmail(email: string) {
    return await userRepository.findByEmail(email);
}

export async function signIn({email, password}: CreateUserData) {
    const user = await verifyByEmail(email);
    if (!user) {
        throw { type: "unauthorized", message: "Invalid credentials" }
    }

    const isPasswordValid = hashDataUtils.compareHashData(password, user.password);
    if(!isPasswordValid) {
        throw {
            type: "unauthorized", message: "Invalid credentials"
        }
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    return token;
}

export async function findById(id: number) {
    const user = await userRepository.findById(id);
    if (!user) {
        throw { type: "not_found" }
    }
    delete user.password;
    return user;
}