import { Body, Controller, Post } from '@nestjs/common';
import {AppoinmentDto} from './dto/appoinement.dto'
import {AppoinementService} from '../appoinement/appoinement.service'

@Controller('appoinement')
export class AppoinementController {

    constructor(private readonly appoinementService: AppoinementService) { }

    @Post()
    async create(@Body() appoinmentDto: AppoinmentDto) {
        this.appoinementService.create(appoinmentDto);
    }

}
