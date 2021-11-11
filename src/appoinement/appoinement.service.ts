import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {AppoinmentDto, updateAppoinmentDto} from './dto/appoinement.dto';
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
   async update(userId1: string, createProductDTO: updateAppoinmentDto): Promise<Appoinment> {
    const updatedProduct = await this.appoinmentModel.findOneAndUpdate({userId: userId1},{$set:{status:createProductDTO.status}})

    return updatedProduct;
}  



}
