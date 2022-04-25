import { Router } from "express";
import { getTerms } from "../controllers/termControllers.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const termRouter = Router();

termRouter.get('/terms', ensureAuthenticatedMiddleware, getTerms)

export default termRouter;