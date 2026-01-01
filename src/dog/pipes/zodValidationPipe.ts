import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import z from 'zod';
import { CreateDogZodDto } from '../dto/createDogZod-dto';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: z.ZodType) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: CreateDogZodDto, metadata: ArgumentMetadata) {
    const validateBody = this.schema.safeParse(value);

    if (!validateBody.success) {
      const prettfyError = z.prettifyError(validateBody.error);
      throw new BadRequestException(prettfyError);
    }

    return validateBody.data;
  }
}
