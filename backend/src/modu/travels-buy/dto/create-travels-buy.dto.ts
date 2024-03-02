import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTravelsBuyDto {
  @ApiProperty()
  @IsNumber()
  travelsid: number;

  @ApiProperty()
  @IsNumber()
  pricetot: number;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNumber()
  numberseats: number;
}