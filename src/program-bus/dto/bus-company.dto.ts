import { IsString, IsNumber, IsArray, ValidateNested, IsUrl } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { SeatDto } from './seat.dto';

export class busCompanyDto {
  @ApiProperty()
  @IsString()
  name_company: string;

  @ApiProperty()
  @IsUrl()
  urlImageCompany:URL;

  @ApiProperty()
  @IsArray()
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

 

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SeatDto)
  seat: SeatDto[];
 }