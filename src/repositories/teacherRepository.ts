import { client } from "../database.js";

export async function findTeachers() {
    const teachers = await client.teacher.findMany({})

    return teachers;
}

export async function findTestByCategory(categoryId: number, teacherId: number) {
    const tests = await client.teacherDiscipline.findMany({
        where: {
            teacherId
        },
        include: {
            tests: {
                where: {
                    categoryId
                }
            }
        }
    })
    
    return tests;
}