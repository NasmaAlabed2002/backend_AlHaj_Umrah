import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SeatDocument = Seat & Document;

@Schema()
export class Seat extends Document {
  
  @Prop()
  number_bus: number;

  @Prop()
  seatNumber: number;

  @Prop()
  name_passenger: string;
  
  @Prop()
  isReserved: boolean;


}

export const SeatSchema = SchemaFactory.createForClass(Seat);
