import * as disciplineRepository from "../repositories/disciplineRepository.js";

export async function getDisciplineByTermId(termId: number) {
   return await disciplineRepository.findDisciplinesByTermId(termId);
}