import { Post } from "../model/Post";

interface IPostRepo {
    save(post : Post): Promise<void>;
    getPostById(uniqueId : number): Promise<Post>;
    getAllPosts(): Promise<Post[]>;
}

export class PostRepo implements IPostRepo {

    async save(post : Post): Promise<void>{
        console.log("Post repo is called")
        try {
            // console.log("Something is happening");
            await Post.create({
                id: post.id,
                name: post.name,
                description: post.description
            })            
        } catch (error) {
            console.log("Post repo error");
            throw new Error("Failed to create post");
        }
    };
    // update(post: Post): Promise<void>{};
    // delete(post: Post): Promise<void>{};
    async getPostById(uniqueId : number): Promise<Post> {
        try{
            const post = await Post.findOne({
                where: {
                    id: uniqueId
                },
            });
            if(!post){
                throw new Error("Post doesn't exist")
            }
            return post;
        }catch (error) {
            throw new Error("Post doesn't exist")
        }
    };
    async getAllPosts(): Promise<Post[]>{
        try {
            return await Post.findAll();
        } catch (error) {
             throw new Error("Failed to create note!");
           }
    };
}