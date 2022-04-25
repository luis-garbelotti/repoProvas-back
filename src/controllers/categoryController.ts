import { Request, Response } from "express";
import * as categoryService from "../services/categoryService.js";

export async function getCategories(req: Request, res: Response) {
    const { disciplineId, categoryId } = req.params;
    const categoriesTests = await categoryService.getCategoriesByDisciplineId(parseInt(disciplineId), parseInt(categoryId));

    res.send(categoriesTests);
}