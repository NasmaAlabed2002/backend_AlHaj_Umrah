import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString, ValidateNested, isString } from "class-validator";
import { Schema } from 'mongoose';
import { BusCompanyDto } from "./bus-company.dto";
import { Type } from "class-transformer";
import { SeatDto } from "./seat.dto";
export class CreateProgramBusDto {
    @IsString()
    id_ProgramUmrah: string;
    
    // @IsString()
    // id_busCompany: string;
    @ValidateNested({ each: true })
    @Type(() => SeatDto)
    seat: SeatDto[];
}

  