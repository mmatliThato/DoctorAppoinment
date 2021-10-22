import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
    ValidationPipe,
  } from '@nestjs/common';
  
  import { AuthpService } from './authp.service';
  import { AuthCredentialsDto } from './dto/auth-credentials.dto';
  import { JwtAuthGuard } from './guards/jwt-auth.guard';
  import { LocalAuthGuard } from './guards/local-auth.guard';
  
  @Controller('authp')
  export class AuthpController {
    constructor(private authService: AuthpService) {}
  
    @Post('/signup')
    async signUp(
      @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
    ): Promise<void> {
      return await this.authService.signUp(authCredentialsDto);
    }
  
  
  
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req) {
      return this.authService.signIn(req.user);
    }
  
  
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Request() req) {
      return req.user;
    }
    
  }
  