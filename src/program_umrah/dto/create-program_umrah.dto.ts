import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from 'class-validator';
import { isNativeError } from "util/types";

export class CreateProgramUmrahDto {
    @ApiProperty()
    // @IsString()
    name_program:string;

    @ApiProperty()
    // @IsString()
    type_programUmrah:string;

    @ApiProperty()
    Date_Travel:Date;

    @ApiProperty()
    // @IsNumber()
    total_stay:Number;

    @ApiProperty()
    // @IsNumber()
    stay_in_macca:Number;

    @ApiProperty()
    // @IsNumber()
    stay_in_madina:Number

}
