import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err: any) {
      const error_message = JSON.parse(err.message);
      console.log("Validation error");
      return res.status(400).json({
        status: "Bad Request!",
        message: error_message[0].message,
      });
    }
  };

export default validate;