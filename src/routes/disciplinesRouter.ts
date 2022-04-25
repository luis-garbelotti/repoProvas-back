import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { getDisciplines } from "../controllers/disciplineController.js";

const disciplinesRouter = Router();

disciplinesRouter.get(`/disciplines/terms/:termId`,ensureAuthenticatedMiddleware, getDisciplines)

export default disciplinesRouter;