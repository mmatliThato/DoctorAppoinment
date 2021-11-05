import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import {AppoinmentDto, updateAppoinmentDto} from './dto/appoinement.dto'
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
  

  
 // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
 @Put('/update/:DoctorId')
 async updateProduct(@Body() createProductDTO: any, @Param('DoctorId') DoctorId) {
    
    
    console.log(DoctorId)
    console.log(createProductDTO);
    
    const updatedProduct = await this.appoinementService.update(DoctorId, createProductDTO);


    if(updatedProduct)
    {
        console.log('hi')
        
    }else{
        console.log(updatedProduct);
    }
    //  if (!updatedProduct) throw new NotFoundException('appoinment does not exist!');
    //  return res.status(HttpStatus.OK).json({
    //      message: 'Oppoinment Updated Successfully',
    //      updatedProduct 
    //  });
 }
   
    
}
