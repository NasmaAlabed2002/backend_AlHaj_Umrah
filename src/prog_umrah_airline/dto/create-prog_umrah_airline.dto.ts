import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";
export class CreateProgUmrahAirlineDto {  
     @ApiProperty()
     minimumAge : Date;
}
