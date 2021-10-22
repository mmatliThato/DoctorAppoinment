import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {AppoinmentDto} from './dto/appoinement.dto';
import {Appoinment} from './interfaces/appoinment.interface';

@Injectable()
export class AppoinementService {
    constructor(
        @InjectModel('Appoinment') private appoinmentModel: Model<Appoinment>
       
      ) {}


    async create(appoinmentDto: AppoinmentDto): Promise<Appoinment> {
        const createdPost = new this.appoinmentModel(appoinmentDto).save();
        return await (await createdPost)._id;
        
    }    


  async getallAppoinment(DoctorId: string): Promise<Appoinment[]> {
    const appoinments =  await this.appoinmentModel.find({DoctorId});
    return appoinments;
      
    
  }

  async getappoinments(): Promise<Appoinment[]> {
    return await this.appoinmentModel.find()

    }
    




 // Put a single product
//  async updateProduct(DoctorId: string, appoinment: AppoinmentDto): Promise<Appoinment> {
//   const updatedProduct = await this.appoinmentModel
//                       .findByIdAndUpdate(DoctorId, appoinment, {new: true});
//   return updatedProduct;
// }
}
