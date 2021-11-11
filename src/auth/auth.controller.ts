import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Request,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from './interfaces/user.interface';
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';
import { AnyARecord } from 'dns';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> 
  {

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
  @Get('/getAll')
  async getall(@Req() req){
     return this.authService.getallDoctors()
  }

 

    // GET single doctor: /product/12345666p
    @Get('/:docID')
    async getDoctor(@Res() res, @Param('docID') docID) {
        const product = await this.authService.getDoctor(docID);
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(product);
    }



    @Patch('update/:userId')
    @UseInterceptors(FileInterceptor('file'))
    async updateProfilePicture(@UploadedFile() file: Express.Multer.File, @Param('userId') userId: string){

        const picture = file.buffer.toString('base64');
        return await this.authService.updateUserProfileFromTheDatabase(userId, picture);
    }



    // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
    
    @Put(':id')
    update(@Body() updateItemDto: AuthCredentialsDto, @Param('id') id): Promise<User> {
      return this.update(id, updateItemDto);

    }

    
}
