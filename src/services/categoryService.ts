import * as categoryRepository from "../repositories/categoryRepository.js";

export async function getCategoriesByDisciplineId(disciplineId: number, categoryId: number) {
    return await categoryRepository.findCategoriesByDisciplineId(disciplineId, categoryId);
}