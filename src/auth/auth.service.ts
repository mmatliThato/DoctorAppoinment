import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './interfaces/user.interface';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password,name,location,title,phonenumber,yearsOfex,Qualification,profileImage} = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ username, password: hashedPassword,name,location,title,phonenumber,yearsOfex,Qualification,profileImage});

    try {
      await user.save();
      return user._id;
    
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }


  // Get a single Product
  async getDoctor(docID: string): Promise<User> {
    const doctor = await this.userModel.findById(docID); 
    return doctor;

  }

  
  async signIn(user: User) {
    const payload = {username: user.username, sub: user._id ,name: user.name,title: user.title,  location: user.location,user,phonenumber: user.phonenumber,Qualification: user.Qualification, profileImage:user.profileImage };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);

    if (valid) {
      return user;
    }

    return null;
  }
  

  async getallDoctors(): Promise<User[]> {

    return await this.userModel.find()
      
    }
    
  
      
async updateUserProfileFromTheDatabase(userId:string, picture:string)
{
    const upload = await this.userModel.findOneAndUpdate({_id:userId}, {profileImage:picture});
    return "successfuly Uploaded";
}


  // update user profile
  async updateProfile(docID: string, authcreatDTO: AuthCredentialsDto): Promise<User> {
    const updateProfile = await this.userModel
                        .findByIdAndUpdate(docID, authcreatDTO, {new: true});
    return updateProfile;
}

async update(id: string, user: User): Promise<User> {
  return await this.userModel.findByIdAndUpdate(id, user, { new: true });
}


}
