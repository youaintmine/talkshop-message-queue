import { Job, Queue, Worker } from "bullmq";

class Subscriber {
    private queue : Queue;

    constructor() {
        this.queue = new Queue('analysis-queue', {
            connection: {
                host: 'redis-0',
                port: 6379
            }
        });
    }

    async start(): Promise<void> {
        const worker = new Worker('analysis-queue', async(job : Job) => {
            const { message } = job.data;
            console.log(message);
        });
    }
}

export default Subscriber;