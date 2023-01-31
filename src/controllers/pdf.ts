import { createPdf } from "../modules/pdf-kit/service";
import { failureResponse } from "../modules/common/service";
import { Request, Response } from "express";

export const createPdfController = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const doc = createPdf();
    res.setHeader("Content-Type", "application/pdf");
    doc.pipe(res);
  } catch (error) {
    console.log(error);
    return failureResponse("server error", error, res);
  }
};
