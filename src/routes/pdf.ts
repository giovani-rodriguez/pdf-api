import { Application, Request, Response } from "express";
import { createPdfController } from "../controllers/pdf";
export class PDFRoutes {
  public route(app: Application) {
    app.get("/generate-pdf", async (req: Request, res: Response) => {
      await createPdfController(req, res);
    });
  }
}
