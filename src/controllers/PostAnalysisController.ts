import { Request, Response } from "express";
import { Worker, Queue } from "bullmq";
import { PostAnalysisRepo } from "../repository/PostAnalysisRepo";
import { PostAnalysis } from "../model/PostAnalysis";

class PostAnalysisController {
    protected analysis_repo : PostAnalysisRepo;
    private analysis_queue : Queue;

    constructor() {
        this.analysis_repo = new PostAnalysisRepo();
        this.analysis_queue = new Queue('analysis-queue');
        const worker = new Worker('analysis-queue', async (job) => {
            const post = job.data;
        });
    }

    async create(id : number, wordcount: number, wordlength : number){
        try{
            //The data is verified already
            const analysisPost = new PostAnalysis();
            analysisPost.id = id;
            analysisPost.wordcount = wordcount;
            analysisPost.wordlength = wordlength;

            await new PostAnalysisRepo().save(analysisPost);

        } catch (error){
            throw new Error("Message Queue is not updated")
        }
    }

    async findById(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"]);
            const post  = await this.analysis_repo.retrieveById(id);
            
            res.status(200).send(post);
        }catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Cannot find User"
            });
        }
    }
}

export default new PostAnalysisController();