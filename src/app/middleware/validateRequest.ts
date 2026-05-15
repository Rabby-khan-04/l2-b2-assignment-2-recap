import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

export const validateRequest =
  (schema: ZodType) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) return next(result.error);

    req.body = result.data;
    return next();
  };
