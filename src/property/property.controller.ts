import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty-dto';
import { IdParamDto } from './dto/idParams.dto';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // @HttpCode(202)
  // create(@Req() request: Request) {
  create(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['create'],
        always: true,
      }),
    )
    body: CreatePropertyDto,
  ) {
    console.log(body);
    return this.propertyService.create();
  }

  // @Body(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     groups: ['update'],
  //     always: true,
  //   }),
  // )
  // body: CreatePropertyDto,
  @Patch(':id')
  update(
    @Param() param: IdParamDto,
    // @Param('id', ParseIdPipe) id, // using custom pipe
    @Body() body: CreatePropertyDto,
  ) {
    return this.propertyService.update();
  }

  @Get(':id')
  // findOne(@Req() request: Request) {
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return this.propertyService.findOne();
  }
}
