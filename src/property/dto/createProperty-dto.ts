import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  // @IsString({ always: true })
  @IsString()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  name: string;

  @IsString()
  @Length(10, 500, { groups: ['create'] })
  @Length(1, 500, { groups: ['update'] })
  description: string;

  // @IsInt({ always: true })
  @IsInt()
  @IsPositive()
  area: number;
}
