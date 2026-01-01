import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    console.log({ val, value, metadata });
    if (isNaN(val) || val <= 0) {
      throw new BadRequestException('Id must be a number');
    }

    if (val <= 0) {
      throw new BadRequestException('Id must be a positive number');
    }
    return val;
  }
}
