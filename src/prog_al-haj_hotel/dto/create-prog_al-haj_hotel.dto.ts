import { ApiProperty } from "@nestjs/swagger";
export class CreateProgAlHajHotelDto {
    @ApiProperty()
    id_ProgramAlHaj:string;

    @ApiProperty()
    id_HotelRoom:string;

}
