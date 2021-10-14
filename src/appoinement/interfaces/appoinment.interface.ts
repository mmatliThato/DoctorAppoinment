import { Document } from 'mongoose';

export interface Appoinment extends Document {
  readonly email: string;
  readonly appoinmentDate: Date;
  readonly  name: string;
 
  readonly userId: string;
}