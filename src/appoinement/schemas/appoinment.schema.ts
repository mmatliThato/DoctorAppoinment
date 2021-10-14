import * as mongoose from 'mongoose';

export const AppoinmentSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
appoinmentDate: String,
  name: String,
  
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
}

  
});