import { Document } from 'mongoose';

export interface Appoinment extends Document {
   email: string;
   appoinmentDate: string;
    name: string;
   status: string;
   userId: string;
 DoctorId :string;
} 

