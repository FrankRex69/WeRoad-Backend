import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTravelsBuyDto {
  @ApiProperty()
  @IsNumber()
  travels_id: number;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNumber()
  numberseats: number;
}