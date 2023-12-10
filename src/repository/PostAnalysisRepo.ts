import { PostAnalysis } from "../model/PostAnalysis";


interface IPostAnalysisRepo {
    save(post : PostAnalysis): Promise<void>;
    retrieveById(uniqueId : number): Promise<PostAnalysis>;
    // getAllAnalysis() : Promise<PostAnalysis[]>;
}

export class PostAnalysisRepo implements IPostAnalysisRepo {

    async save(post: PostAnalysis): Promise<void> {
        try {
            const newAnalysis = PostAnalysis.build({
                id : post.id,
                wordcount: post.wordcount,
                wordlength: post.wordlength,
            });

            await newAnalysis.save();

        } catch (error) {
            console.log("Post Analysis Repo Error");
            throw new Error(`Failed to save analysis of Post ${post.id}`);
        }

    }

    async retrieveById(uniqueId: number): Promise<PostAnalysis> {
        try{
            const analysis = await PostAnalysis.findOne({
                where: {
                    id: uniqueId
                },
            });
            if(!analysis){
                throw new Error("Analysis for this Post Not Available");
            }
            return analysis;
        } catch (error) {
            throw new Error("Analysis for this Post is not Available");
        }
    };
}