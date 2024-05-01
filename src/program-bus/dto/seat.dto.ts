import { IsNumber, IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
export class SeatDto {

 @ApiProperty()
  @IsNumber()
  number_bus: number;

  @ApiProperty()
  @IsNumber()
  seatNumber: number;

  @ApiProperty()
  @IsString()
  name_passenger: string;
  
   @ApiProperty()
  @IsBoolean()
  isReserved: boolean;


}