import { client } from "../database.js";

export async function findAllTerms() {
    const allTerms = await client.term.findMany({})

    return allTerms;
}