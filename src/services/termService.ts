import * as termRepository from "../repositories/termRepository.js";

export async function getTerms() {
    const allTerms = await termRepository.findAllTerms();

    if (!allTerms) {
        throw {
            type: 'not_found'
        }
    }

    return allTerms;
}