import * as express from "express";
import * as bodyParser from "body-parser";
const cors = require("cors");
import { CommonRoutes } from "../routes/common";
import { PDFRoutes } from "../routes/pdf";

class App {
  public app: express.Application;
  private common_routes: CommonRoutes = new CommonRoutes();
  private pdf_routes: PDFRoutes = new PDFRoutes();

  constructor() {
    this.app = express.default();
    this.config();
    this.pdf_routes.route(this.app);
    this.common_routes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors({ origin: true }));
  }
}
export default new App().app;
