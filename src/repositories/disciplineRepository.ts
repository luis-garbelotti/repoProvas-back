import { client } from "../database.js";

export async function findDisciplinesByTermId(termId: number) {
    const disciplines = await client.discipline.findMany({
        where: {
            termId
        }
    })

    return disciplines;
}