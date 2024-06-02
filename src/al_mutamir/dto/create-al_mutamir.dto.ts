import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsObject, IsString, IsUrl } from 'class-validator';
import { Url } from "url";
export class CreateAlMutamirDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    full_name: string;

    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    name_father: string;

    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    name_mother: string;

    @ApiProperty()
    @IsNumber()
    phone_number:Number;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    // @IsNotEmpty()
    birth: Date;

    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    gender: string;
    
    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    Nationality: string;

    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    passport_number: string;

    @ApiProperty()
    @IsUrl()
    passport_photo : Url;

    @ApiProperty()
    @IsUrl()
    almutamir_photo: Url;
    
    @ApiProperty()
    @IsNumber()
    number_bus:Number;

    @ApiProperty()
    @IsString()
    type_room:string; 

    @ApiProperty()
    @IsNumber()
    seatNumber:Number;

    @ApiProperty()
    payment_method:string;

    @ApiProperty()
    Verification:Boolean;
}
