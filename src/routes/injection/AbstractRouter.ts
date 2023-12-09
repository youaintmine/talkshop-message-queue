import { Router } from "express";
import IRouter from "./Router";

abstract class AbstractRouter implements IRouter {
    public router : Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    abstract routes(): void;
}

export default AbstractRouter