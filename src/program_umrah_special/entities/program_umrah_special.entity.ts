import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, Document, SchemaTypes } from 'mongoose';
import { Office } from 'src/office/entities/office.entity';
import { HotelRoom } from 'src/hotel-room/entities/hotel-room.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Double } from 'mongodb';

export type ProgramUmrahSpecialDocument = HydratedDocument<ProgramUmrahSpecial>;
@Schema()
export class ProgramUmrahSpecial {
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'Office' }
  ) id_Office: Office;

  @ApiProperty({ example: 2, description: 'id HotelRoom' })
  @Prop(
      { type: SchemaTypes.ObjectId, ref: 'HotelRoom' }
  ) id_HotelRoom: HotelRoom;

  @Prop({ type : 'Object' }) 
  Airline : {name:string, price_tecket:Double }
  
  // @Prop()
  // name_program: string;
  @Prop({ default:()=> Date.now() ,required:true })
  Date_Travel: Date;
  @Prop()
  total_stay: Number;
  @Prop()
  stay_in_macca: Number;
  @Prop()
  stay_in_madina: Number

}
export const ProgramUmrahSpecialchema = SchemaFactory.createForClass(ProgramUmrahSpecial);
