
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Double } from 'mongodb';
import { HydratedDocument, SchemaType, Document, SchemaTypes } from 'mongoose';
import { Office } from 'src/office/entities/office.entity';
import { busCompany } from 'src/program-bus/entities/bus-company.schema';
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
  Date_Travel_Hijri :string;
  @Prop()
  total_stay: Number;
  @Prop()
  stay_in_macca: Number;
  @Prop()
  stay_in_madina: Number;
  @Prop()
  image:URL;
  @Prop()
  price1: String;
  @Prop()
  price2: string;
  @Prop()
  price3: string;
  @Prop()
  price4: string;
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'busCompany' }
  ) id_busCompany: busCompany;
  @Prop({ type : 'Object' }) 
  Airline : {name:string, price_tecket:Double }
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