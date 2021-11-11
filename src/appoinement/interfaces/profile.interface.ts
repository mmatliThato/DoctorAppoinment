import { Document } from 'mongoose';

export interface Profile extends Document {
   email: string;
   appoinmentDate: string;
    name: string;
   status: string;
   userId: string;
 DoctorId :string;
} 