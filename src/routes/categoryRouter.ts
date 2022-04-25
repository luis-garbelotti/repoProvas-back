import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { getCategories } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.get('/disciplines/:disciplineId/categories/:categoryId', ensureAuthenticatedMiddleware, getCategories)

export default categoryRouter;