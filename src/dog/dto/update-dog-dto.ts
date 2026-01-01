import { IsNumber, IsString } from 'class-validator';

export class UpdateDogDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  breed: string;
}
