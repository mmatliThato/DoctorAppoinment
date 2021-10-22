import * as mongoose from 'mongoose';

export const AppoinmentSchema = new mongoose.Schema({

  email: {
    type: String,
    unique: true,
  },

appoinmentDate: String,
  name: String,
 
  status:String,

DoctorId:String,
userId:String,

  
});