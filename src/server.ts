import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import PostRouter from "./routes/PostRouter";
import PostAnalysisRouter from "./routes/PostAnalysisRouter";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
        res.status(200).send("Redirect to Login Page OR Page Feed");
    });
    // this.app.use("/api/v1/post", PostRouter);
    this.app.use("/api/v1/post", PostRouter)
    this.app.use("/api/v1/analyse", PostAnalysisRouter);
  }
}

const port: number = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server started successfully on ${port}!`);
});