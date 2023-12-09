import PostController from "../controllers/PostController";
import validate from "../middleware/validate";
import { createPostSchema } from "../schema/PostSchema";
import AbstractRouter from "./injection/AbstractRouter";

class PostRouter extends AbstractRouter{
    public routes(): void {
        this.router.post("", validate(createPostSchema),PostController.create)
    }
}

export default new PostRouter().router;