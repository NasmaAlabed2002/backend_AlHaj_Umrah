import { ApiProperty } from "@nestjs/swagger";
export class CreateProgHajAirlineDto {
    @ApiProperty()
    Airline : Array<Document>;
}
