import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate } from "class-validator";
import { Date } from "mongoose";
export class CreateProgUmrahAirlineDto {  
     @ApiProperty()
     minimumAge : Date;
}
