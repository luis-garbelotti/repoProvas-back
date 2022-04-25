import { client } from "../database.js";

export async function findCategoriesByDisciplineId(disciplineId: number, categoryId: number) {
    const disciplineCategories = await client.category.findMany({
        where: {
            id: categoryId
        },
        include: {
            tests: {
                where: {
                    disciplineId
                },
                include: {
                    teachersDisciplines: {
                        include: {
                            teachers: true
                        }
                    }
                }
        }
        }
    })
    return disciplineCategories;
}
/* 
const disciplineCategories = await client.category.findMany({
    include: {
        tests: {
            where: {
                disciplineId
            },
            include: {
                teachersDisciplines: {
                    include: {
                        teachers: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }

        }

    }
}) */