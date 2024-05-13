import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from 'class-validator';
import { isNativeError } from "util/types";

export class CreateProgramUmrahDto {
    @ApiProperty()
    // @IsString()
    name_program:string;

    @ApiProperty()
    Date_Travel: Date;

    @ApiProperty()
    Date_Travel_Hijri :Date;

    @ApiProperty()
    // @IsNumber()
    total_stay:Number;

    @ApiProperty()
    // @IsNumber()
    stay_in_macca:Number;

    @ApiProperty()
    //  @IsNumber()
    stay_in_madina:Number;

    @ApiProperty()
    image:URL;
    
    @ApiProperty()
    price1: string;
    @ApiProperty()
    price2: string;
    @ApiProperty()
    price3: string;
    @ApiProperty()
    price4: string;



}
