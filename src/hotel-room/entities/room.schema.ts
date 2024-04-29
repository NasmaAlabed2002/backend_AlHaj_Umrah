import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type roomDocument = room & Document;

@Schema({versionKey:false})
export class room {
  @Prop()
  type_room:string;
  @Prop()
  price:Number;
  
}
export const roomSchema = SchemaFactory.createForClass(room);