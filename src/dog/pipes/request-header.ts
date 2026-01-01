import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (
    targetDto: ClassConstructor<{ accessToken: string }>,
    ctx: ExecutionContext,
  ) => {
    if (!targetDto) {
      throw new BadRequestException(
        'DTO class is required for RequestHeader decorator',
      );
    }

    const headers = ctx.switchToHttp().getRequest<Request>().headers;
    // console.log('Raw Headers in Decorator:', headers);

    const transformed = plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
    });

    // console.log('Transformed Headers in Decorator:', transformed);
    // console.log(
    //   'Is instance of targetDto?',
    //   transformed instanceof targetDto,
    // );

    await validateOrReject(transformed, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    // console.log('Validation passed!');
    return transformed;
  },
);
