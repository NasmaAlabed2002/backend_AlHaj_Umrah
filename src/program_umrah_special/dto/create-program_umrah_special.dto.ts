import { ApiProperty } from "@nestjs/swagger";
export class CreateProgramUmrahSpecialDto {

    @ApiProperty()
    // @IsString()
    name_program:string;
    
    @ApiProperty()
    Airline : Array<Document>;

    @ApiProperty()
    Date_Travel:Date;

    @ApiProperty()
    // @IsNumber()
    total_stay:Number;

    @ApiProperty()
    // @IsNumber()
    stay_in_macca:Number;

    @ApiProperty()
    // @IsNumber()
    stay_in_madina:Number

}
