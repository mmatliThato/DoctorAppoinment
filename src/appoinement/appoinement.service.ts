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
        const createdPost = new this.appoinmentModel(appoinmentDto);
        return await createdPost.save();
    }    

}
