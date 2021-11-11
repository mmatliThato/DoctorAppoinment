import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppoinementModule } from './appoinement/appoinement.module';
import { AuthpModule } from './authp/authp.module';
import { MulterModule } from '@nestjs/platform-express';





@Module({
  imports: [

    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    }),
    AuthModule,
    AppoinementModule,
    AuthpModule,
    

  ],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}