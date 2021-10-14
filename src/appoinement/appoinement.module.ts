import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppoinementService } from './appoinement.service';
import { AppoinmentSchema } from './schemas/appoinment.schema'
import { AppoinementController } from './appoinement.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'appoinments', schema: AppoinmentSchema }]),
   
  ],
  
  providers: [AppoinementService],
  controllers: [AppoinementController]
})

export class AppoinementModule {}
