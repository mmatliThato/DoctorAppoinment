import { Document } from 'mongoose';

export interface User extends Document {
  profileImage?: string;
   username: string;
 password: string;
 name: string;
  title: string;
    location: string;
   yearsOfex:number;
phonenumber:number;
 Qualification:string
}






