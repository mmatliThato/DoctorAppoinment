import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly  name: string;
  readonly  title: string;
  readonly  description: string;
  
}





