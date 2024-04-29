import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class roomDto {
    @IsString()
    type_room:string;
    
    @IsNumber()
    price:Number;
}