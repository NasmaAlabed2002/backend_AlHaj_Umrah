import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from 'class-validator';
import { Double } from "mongodb";
import { isNativeError } from "util/types";

export class CreateProgramUmrahDto {
    @ApiProperty()
    id_Office:string;

    @ApiProperty()
    id_busCompany:string;

    @ApiProperty()
    Airline : {name:string, price_tecket:Double }
    @ApiProperty()
    @IsString()
    name_program:string;

    @ApiProperty()
    Date_Travel: Date;

    @ApiProperty()
    Date_Travel_Hijri :string;

    @ApiProperty()
    @IsNumber()
    total_stay:Number;

    @ApiProperty()
    @IsNumber()
    stay_in_macca:Number;

    @ApiProperty()
    @IsNumber()
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
    @ApiProperty()
    Available_viewing : boolean;
    @ApiProperty()
    Is_airline:boolean;
}
