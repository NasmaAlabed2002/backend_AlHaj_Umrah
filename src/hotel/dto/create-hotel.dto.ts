import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateHotelDto {
 
    @ApiProperty()
    @IsString()
    name : string;

    @ApiProperty() 
    @IsNumber()
    Number_stars:number;

    @ApiProperty()
    @IsString()
    location : string;

    @ApiProperty()
    @IsArray()
    details : string;

    @ApiProperty()
    @IsUrl()
    urlImagehotel:URL;

    @ApiProperty()
    @IsArray()
    urlImage:Array<string>;

    
    @ApiProperty()
    // @IsString()
    @IsArray()
    Services:Array<string>;

       
    @ApiProperty()
    @IsString()
    Places_available_visit:Array<string>;

    @ApiProperty()
    @IsUrl()
    link: URL;
}
