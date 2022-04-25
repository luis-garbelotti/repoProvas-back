import { Response, Request } from "express";
import * as teacherService from "../services/teacherService.js";

export async function getTeachers(req: Request, res: Response) {
    const teachers = await teacherService.getAllTeachers();

    res.send(teachers);
}

export async function getTestsByTeacherAndCategory(req: Request, res: Response) {
    const { categoryId, teacherId } = req.params;

    const tests = await teacherService.getTestsByTeacherAndCategory(parseInt(categoryId), parseInt(teacherId));

    res.send(tests);
}