import { Router } from "express";
import userRouter from "./userRouter.js";
import termRouter from "./termRouter.js";
import disciplinesRouter from "./disciplinesRouter.js";
import categoryRouter from "./categoryRouter.js";
import teacherRouter from "./teacherRouter.js";

const router = Router();

router.use(userRouter);
router.use(termRouter);
router.use(disciplinesRouter);
router.use(categoryRouter);
router.use(teacherRouter);

export default router;