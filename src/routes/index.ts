import { Router } from "express";
import userRouter from "./userRouter.js";
import termRouter from "./termRouter.js";

const router = Router();

router.use(userRouter);
router.use(termRouter);

export default router;