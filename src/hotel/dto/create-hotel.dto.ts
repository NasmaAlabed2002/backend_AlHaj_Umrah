import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export class CreateHotelDto {
 
    @ApiProperty()
    @IsString()
    name : string;

    @ApiProperty() 
    @IsString()
    Number_stars:string;

    @ApiProperty()
    @IsString()
    location : string;

    @ApiProperty()
    @IsString()
    details : string;

    @ApiProperty()
    urlImage:Array<string>;

    
    @ApiProperty()
    @IsString()
    Services:Array<string>;

       
    @ApiProperty()
    @IsString()
    Places_available_visit:Array<string>;

    @ApiProperty()
    @IsString()
    link: string;
}
