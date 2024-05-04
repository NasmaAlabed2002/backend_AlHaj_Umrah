import { IsString, IsNumber, IsArray, ValidateNested, IsUrl } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { SeatDto } from './seat.dto';
import { PartialType } from '@nestjs/mapped-types';

export class BusCompanyDto {
  @ApiProperty()
  @IsString()
  name_company: string;

  @ApiProperty()
  // @IsArray()
  Services: Array<string>;
  
  @ApiProperty()
  // @IsArray()
  goals_company:Array<string>;

  @ApiProperty()
  @IsUrl()
  urlImageCompany:URL;

  @ApiProperty()
  // @IsArray()
  urlImage:Array<string>

  @ApiProperty()
  @IsUrl()
  link: URL;

  @ApiProperty()
  @IsString()
  type_bus: string;

  @ApiProperty()
  @IsString()
  price_tecket: string;

 
  // @ApiProperty()
  // @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SeatDto)
  seat: SeatDto[];
 }

 export class UpdateBusCompanyDto extends PartialType(BusCompanyDto) {}