import { ApiProperty } from "@nestjs/swagger";
import { IsNumber , IsString } from "class-validator";
import { Double } from "mongodb";
export class CreateProgramUmrahSpecialDto {

   @ApiProperty()
   id_Office:string;
   @ApiProperty()
   id_HotelRoom:string;
    
    @ApiProperty()
    Airline : {name:string, price_tecket:Double }

    @ApiProperty()
    Date_Travel:Date;

    @ApiProperty()
    @IsNumber()
    total_stay:Number;

    @ApiProperty()
    @IsNumber()
    stay_in_macca:Number;

    @ApiProperty()
    @IsNumber()
    stay_in_madina:Number

}
