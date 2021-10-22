import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppoinementService } from './appoinement.service';
import { AppoinmentSchema } from './schemas/appoinment.schema'
import { AppoinementController } from './appoinement.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Appoinment', schema: AppoinmentSchema }])],
  
  providers: [AppoinementService],
  controllers: [AppoinementController],
 
})

export class AppoinementModule {}
