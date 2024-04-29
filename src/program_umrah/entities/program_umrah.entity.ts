
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, Document, SchemaTypes } from 'mongoose';
import { Office } from 'src/office/entities/office.entity';

export type ProgramUmrahDocument = HydratedDocument<ProgramUmrah>;
@Schema()
export class ProgramUmrah {
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'Office' }
  ) id_Office: Office;



  @Prop()
  name_program: string;
 
  @Prop()
  Date_Travel: Date;
  @Prop()
  total_stay: Number;
  @Prop()
  stay_in_macca: Number;
  @Prop()
  stay_in_madina: Number

}


export const ProgramUmrahchema = SchemaFactory.createForClass(ProgramUmrah);


// @ApiProperty()
// @IsString()
//

// @ApiProperty()
// @IsString()
//

// @ApiProperty()
//

// @ApiProperty()
// @IsNumber()
//

// @ApiProperty()
// @IsNumber()
//

// @ApiProperty()
// @IsNumber()
// 