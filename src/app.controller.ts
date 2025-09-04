/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Controller('video')
export class AppController {
  constructor(@InjectQueue("video") private readonly videoQueue: Queue) {}

  @Post("process")
  async processVideo() {
    await this.videoQueue.add('process',{fileName:"best-video", fileType:"mp4"})
    return {
      message:"Video processing job added to queue"
    }
  }

}
