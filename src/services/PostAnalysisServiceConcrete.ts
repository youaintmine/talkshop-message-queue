import { Job, Worker } from "bullmq";
import Subscriber from "./Analysis/Subscriber";
import PostAnalysisController from "../controllers/PostAnalysisController";

class PostAnalysisService extends Subscriber {

    async findMetadata(postDescription: string) : Promise<{totalWords : number, averageWords: number}> {
        const trimmedInput = postDescription.trim();

        const words = trimmedInput.split(/\s+/);
        const wordCount = words.length;

        const totalWords = words.reduce((total, word) => total + word.length, 0);
        const averageWords = wordCount > 0 ? totalWords / wordCount : 0;

        return {totalWords, averageWords };
    }

    async start(): Promise<void> {
        const worker = new Worker('analysis-queue', async(job : Job)=> {
            const {id, postName, postDescription} = job.data;
            
            if(id === undefined || postName === undefined || postDescription === undefined){
                console.log("Invalid Post Details");
                return;
            }
            
            console.log('Processing job: ',id, name);


            const {totalWords, averageWords} =await this.findMetadata(postDescription);

            await PostAnalysisController.create(id, totalWords, averageWords);
        });
    }
}
export default PostAnalysisService;