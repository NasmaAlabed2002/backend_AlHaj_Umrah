import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString, ValidateNested, isString } from "class-validator";
import { Schema } from 'mongoose';
import { BusCompanyDto } from "./bus-company.dto";
import { Type } from "class-transformer";
export class CreateProgramBusDto {
    @IsString()
    id_ProgramUmrah: string;

    @IsArray() 
    @ValidateNested({ each: true })
    @Type(() => BusCompanyDto)
    busCompany: BusCompanyDto[];
    
    
}

  