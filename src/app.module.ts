/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';

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
  providers: [AppService],
})
export class AppModule { }
