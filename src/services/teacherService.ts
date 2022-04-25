import * as teacherRepository from "../repositories/teacherRepository.js"

export async function getAllTeachers() {
    return await teacherRepository.findTeachers(); 
}

export async function getTestsByTeacherAndCategory(categoryId: number, teacherId: number) {
    return await teacherRepository.findTestByCategory(categoryId, teacherId)
}