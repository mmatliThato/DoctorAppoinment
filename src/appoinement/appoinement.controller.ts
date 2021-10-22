import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import {AppoinmentDto} from './dto/appoinement.dto'
import {AppoinementService} from '../appoinement/appoinement.service'
import { Appoinment } from './interfaces/appoinment.interface';

@Controller('appoinement')
export class AppoinementController {

    constructor(private readonly appoinementService: AppoinementService) { }

    @Post()
    async create(@Body() appoinmentDto: AppoinmentDto) {

        appoinmentDto.status = "Pending";

        this.appoinementService.create(appoinmentDto);
    }
  

    @Get('/get/:DoctorId')
    async get(@Param('DoctorId') DoctorId: any): Promise<any> {
        
        return this.appoinementService.getallAppoinment(DoctorId);
    }
    @Get('/getAll')
    async getall(@Req() req){
       return this.appoinementService.getappoinments()
    }

    
}
