import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { GridFSBucket } from "mongodb";

export class CreateAlHajjDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name_father: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name_mother: string;

    @ApiProperty()
    @IsNotEmpty()
    birth: Date;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gender: string;

   
    companionId: string;

 
    @ApiProperty()
    nationalNumber: string;

    @ApiProperty()
    nationalNumbercomp: string;
    
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Nationality: string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    passport_number: string;

    // @ApiProperty()
    // // @IsNotEmpty()
    // passport_photo : GridFSBucket;

    // @ApiProperty()
    // @IsBoolean()

    // Accept : boolean;

    // @ApiProperty()
    // @IsObject()
    // visa :  ob

    // @ApiProperty()
    //@IsDate()
}
