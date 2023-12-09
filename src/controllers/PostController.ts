import { Post } from "../model/Post";
import { Request, Response } from "express";
import { PostRepo } from "../repository/PostRepo";

class PostController {
    async create(req: Request, res:Response) {
        try{
            const {id, name, description} = req.body;
            if(id === undefined || name === undefined || description === undefined){
                throw new Error("Property undefined")
            }
            const post = new Post();
            post.id = id;
            post.name = name;
            post.description = description;
            
            console.log(post);

            // await this.postrepo.save(post);
            await new PostRepo().save(post)

            //Send this via a message broker to analyse the data

            res.status(201).json({
                status: "Created Post!",
                message: "Successfully Created Post"
            });

        } catch (err) {
            res.status(500).json({
                status: "Internal Server issue",
                message: "Internal Server issue!"
            })
        }
    }
}

export default new PostController();