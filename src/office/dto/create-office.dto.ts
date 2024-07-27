import { ApiProperty } from "@nestjs/swagger";

export class CreateOfficeDto {
    @ApiProperty()
    name : string;
    @ApiProperty()
    nameEnglish :string;
    @ApiProperty()
    logoImage:URL;
    @ApiProperty()
    aboutOffice: string;
    @ApiProperty()
    address : string;
    @ApiProperty()
    password : string;
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
