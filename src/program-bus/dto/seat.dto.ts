import { IsNumber, IsBoolean, IsString } from 'class-validator';

export class SeatDto {
  @IsNumber()
  seatNumber: number;

  @IsString()
  name_passenger: string;
  
  @IsBoolean()
  isReserved: boolean;


}