import { Document } from 'mongoose';

export interface User extends Document {
 
  readonly username: string;
  readonly password: string;
  readonly  name: string;
  readonly  title: string;
  readonly  location: string;
readonly   yearsOfex:number;
 readonly phonenumber:number;
 readonly Qualification:string
}






