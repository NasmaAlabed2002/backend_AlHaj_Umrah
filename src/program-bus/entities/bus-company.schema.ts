import { Prop, Schema, SchemaFactory , } from '@nestjs/mongoose';
import { Document , SchemaTypes} from 'mongoose';
import {Seat, SeatSchema } from './seat.schema';
export type busCompanyDocument = busCompany & Document;

@Schema({versionKey:false})
export class busCompany extends Document {
  @Prop()
  name_company: string;

  @Prop()
  type_bus: string;

  @Prop()
  price_tecket: string;

  @Prop()
  number_bus: number;

  // @Prop({ type: [{ type: SchemaTypes.ObjectId , ref: 'Seat' }] })
  // seat: Seat[];

  @Prop({ type :[SeatSchema]}) 
  seat: [{
    seatNumber: Number,
    name_passenger: String,
    isReserved: boolean
  }]
  //Array<Document>;
}

export const busCompanySchema = SchemaFactory.createForClass(busCompany);