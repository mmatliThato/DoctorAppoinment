import { IsString, MaxLength, MinLength } from 'class-validator';
import { IsEmail } from "class-validator";
export class AuthCredentialsDto {
 
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  location: string;

  @IsString()
  Qualification: string;

yearsOfex: number;


  phonenumber: number;

  @IsString()
  @IsEmail()
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;
}