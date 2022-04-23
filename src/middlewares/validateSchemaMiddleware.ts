import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export default function validateSchemaMiddleware(schema: Schema) {
    
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);

        if( validation.error ) {
            throw {
                type: "unprocessable_entity", message: "Invalid input"
            }
        }

        next();
    }
}