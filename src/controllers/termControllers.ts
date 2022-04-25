import { Request, Response } from "express";
import * as termService from "../services/termService.js";

export async function getTerms(req: Request, res: Response) {
    const allTerms = await termService.getTerms();

    res.send(allTerms);
}