import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineService.js";

export async function getDisciplines(req: Request, res: Response) {
    const { termId } = req.params;
    
    const disciplines = await disciplineService.getDisciplineByTermId(parseInt(termId));

    res.send(disciplines);
}