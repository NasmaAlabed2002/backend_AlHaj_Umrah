import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { GridFSBucket } from "mongodb";
import { Url } from "url";

export class CreateAlHajjDto {

    @ApiProperty()
    id_ProgAlHajHotel:string | null; 

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    full_name: string | null; 

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    name_father: string | null; 

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    name_mother: string | null; 

    @ApiProperty()
    @IsEmail()
    email: string | null; 

    @ApiProperty()
    phone_number: string | null; 

    @ApiProperty()
    // @IsNotEmpty()
    birth: Date | null; 
    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    gender: string | null; 

    @ApiProperty()
    Health_status:string | null; 

    @ApiProperty()
    companion1:string | null; 

    @ApiProperty()
    companion2:string | null; 

    
    @ApiProperty()
    silat_alqaraba:string | null; 
 
    @ApiProperty()
    iscompanion:boolean | null; 
    
    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    Nationality: string | null; 

    @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    passport_number: string | null; 

    @ApiProperty()
    // @IsNotEmpty()
    passport_photo :URL | null;  

    @ApiProperty()
    alhaj_photo:URL| null; 

    @ApiProperty()
    payment_method:string | null; 

    @ApiProperty()
    Verification:boolean | null; 

    @ApiProperty()
    type_room:string | null; 
  
    @ApiProperty()
    name_program :string;
}
