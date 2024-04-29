import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SeatDto } from './seat.dto';

export class busCompanyDto {
  @IsString()
  name_company: string;

  @IsString()
  type_bus: string;

  @IsString()
  price_tecket: string;

  @IsNumber()
  number_bus: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SeatDto)
  seat: SeatDto[];
 }