/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BullModule } from '@nestjs/bullmq';
import { VideoProcessor } from './video.worker';

@Module({
  imports: [BullModule.forRoot({
    connection: {
      host: 'localhost',
      port: 6379,
    },
    defaultJobOptions: { attempts: 3,backoff:2000 }
  }),
  BullModule.registerQueue({ name: 'video' })
  ],
  controllers: [AppController],
  providers: [VideoProcessor],
})
export class AppModule { }
