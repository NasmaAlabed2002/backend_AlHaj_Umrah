import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { GridFSBucket } from "mongodb";
import { Url } from "url";

export class CreateAlHajjDto {

    @ApiProperty()
    id_ProgAlHajHotel:string;

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    full_name: string;

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    name_father: string;

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    name_mother: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    phone_number: string;

    @ApiProperty()
    // @IsNotEmpty()
    birth: Date;

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    gender: string;

    @ApiProperty()
    Health_status:string;

    @ApiProperty()
    companion1:string;

    @ApiProperty()
    companion2:string;

    
    @ApiProperty()
    silat_alqaraba:string;
 
    @ApiProperty()
    iscompanion:boolean;
    
    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    Nationality: string;

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    passport_number: string;

    @ApiProperty()
    // @IsNotEmpty()
    passport_photo :URL;

    @ApiProperty()
    alhaj_photo:URL;

    @ApiProperty()
    payment_method:string;

    @ApiProperty()
    Verification:boolean;

    @ApiProperty()
    visa_photo:URL;
}
