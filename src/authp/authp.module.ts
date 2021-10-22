import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { AuthpController } from './authp.controller';
import { AuthpService } from './authp.service';
import { UserSchema } from './schema/user.schema';
import { JwtStrategy } from './strategies/jwt-auth.guard';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Patient', schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthpService, LocalStrategy, JwtStrategy],
  controllers: [AuthpController],
 
})
export class AuthpModule {}