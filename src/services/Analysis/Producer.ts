import { Queue } from "bullmq";

class AnalysisServiceProducer {
    private analysisQueue : Queue;

    constructor() {
        this.analysisQueue = new Queue('analysis-queue',{
            connection: {
                host: 'redis-0',
                port: 6379
            }
        });
    }

    async publish(postId : number, postName: string, postDescription: string): Promise<void> {
        const post = {
            postId,
            postName,
            postDescription
        }
        await this.analysisQueue.add('analysis-post', post);
    } 
}

export default new AnalysisServiceProducer();