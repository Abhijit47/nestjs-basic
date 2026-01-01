import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { type CreateDogZodDto, createDogSchema } from './dto/createDogZod-dto';
import { HeadersDto } from './dto/headers.dto';
import { UpdateDogDto } from './dto/update-dog-dto';
import { RequestHeader } from './pipes/request-header';
import { ZodValidationPipe } from './pipes/zodValidationPipe';

@Controller('dog')
export class DogController {
  @Get()
  findAll() {
    return 'This action returns all dogs';
  }

  @Get(':id')
  findOne() {
    return 'This action returns a single dog';
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createDogSchema))
  create(@Body() body: CreateDogZodDto) {
    return body;
  }

  @Patch(':id')
  update(
    @Body() body: UpdateDogDto,
    // @Headers() headers: HeadersDto, // in-built decorator usage
    @RequestHeader(HeadersDto) // Pass the DTO class, not ValidationPipe
    headers: HeadersDto,
    // headers: HeadersDto, // custom decorator usage
    // @RequestHeader(
    //   new ValidationPipe({
    //     whitelist: true,
    //     validateCustomDecorators: true,
    //   }),
    // )
  ) {
    return {
      ...body,
      headersReceived: headers,
    };
  }

  @Delete(':id')
  destroy() {
    return 'This action removes a dog';
  }
}
