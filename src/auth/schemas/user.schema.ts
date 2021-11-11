import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  name: String,
  title:String,
  location:String,
  yearsOfex:Number,
  phonenumber:Number,
  Qualification:String,
  profileImage:String
  
});