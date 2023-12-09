import PostAnalysisController from "../controllers/PostAnalysisController";
import PostController from "../controllers/PostController";
import AbstractRouter from "./injection/AbstractRouter";

class PostAnalysisRouter extends AbstractRouter{
    public routes(): void {
        this.router.get("/:id", PostAnalysisController.findById);
    }
}

export default new PostAnalysisRouter().router;