import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { getTeachers, getTestsByTeacherAndCategory } from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.get(`/teachers`, ensureAuthenticatedMiddleware, getTeachers)
teacherRouter.get(`/teachers/:teacherId/categories/:categoryId`, ensureAuthenticatedMiddleware, getTestsByTeacherAndCategory)

export default teacherRouter;