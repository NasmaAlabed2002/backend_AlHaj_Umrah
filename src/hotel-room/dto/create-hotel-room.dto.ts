import { Double } from "mongodb"
import { ApiProperty } from "@nestjs/swagger";
import { roomDto } from "./roomdto";
import { IsArray, IsString, ValidateNested, isString } from "class-validator";
import { Type } from "class-transformer";
export class CreateHotelRoomDto {
    @IsString()
    id_hotel: string;

    @ApiProperty()
    @IsArray() 
    @ValidateNested({ each: true })
    @Type(() => roomDto)
    room:roomDto[];

}


