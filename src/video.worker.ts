/* eslint-disable prettier/prettier */
import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

@Processor('video')
export class VideoProcessor extends WorkerHost{

    async process(job: Job) {
        throw Error("file corrupted")
        // console.log(job.id)
        // job.data.
    }

    @OnWorkerEvent('active')
    onAdded(job: Job) { 
        console.log(`Got job with id ${job.id} `)
    }
    
    @OnWorkerEvent('completed')
    onCompleted(job: Job) {
        console.log(`Job with id ${job.id} completed`)
     }

    @OnWorkerEvent('failed')
    onFailed(job: Job) {
        console.log(`Job with id ${job.id} failed`)
     }
    
}