import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateEmployeeDto {
    @ApiProperty()
    @IsString()
    firstname:string;

    @ApiProperty()
    @IsString()
    lastname:string;
  
    @ApiProperty({ default:()=> Date.now() ,required:true })
    birth:Date;
    

    @ApiProperty()
    @IsString()
    specialty:string;
    @ApiProperty()
    password : string;
    @ApiProperty()
    mobile:number;

    @ApiProperty()
    @IsEmail()
    email:string ;

    @ApiProperty()
    @IsString()
    Educational_attainment:string;

    @ApiProperty()
    @IsString()
    adress:string;

    @ApiProperty()
    dateEmployee:Date;

    @ApiProperty()
    Reservation_code:string;
}
