import { ApiProperty } from "@nestjs/swagger";

export class CreateOfficeDto {
    @ApiProperty()
    name : string;

    @ApiProperty()
    address : string;

    @ApiProperty()
    mobile : number ;

    @ApiProperty()
    phone : number ;

    @ApiProperty()
    email :  string ;

    @ApiProperty()
    facebook :  string ;

    @ApiProperty()
    telegram :  string ;

    @ApiProperty()
    instagram : string ;

    @ApiProperty()
    whatsApp : number ;
}
