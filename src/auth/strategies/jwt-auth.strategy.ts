import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configservice:ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configservice.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { _id: payload.sub, username: payload.username,name: payload.name,title: payload.title,location: payload.location,yearsOfex: payload.yearsOfex,phonenumber: payload.phonenumber, Qualification:payload.Qualification};
  }
}