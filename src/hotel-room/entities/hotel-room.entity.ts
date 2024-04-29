import { Hotel } from "src/hotel/entities/hotel.entity";
import { Prop, Schema, SchemaFactory  } from '@nestjs/mongoose';
import { HydratedDocument,Document, SchemaType, SchemaTypes } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";
import { roomSchema } from "./room.schema";

export type HotelRoomDocument = HotelRoom & Document;
@Schema({versionKey:false})

export class HotelRoom extends Document {

 @ApiProperty({ example: 1, description: 'id hotel' })
 @Prop (
   { type : SchemaTypes.ObjectId , ref : 'Hotel' }
 ) id_hotel : Hotel;

 @Prop({ type :[roomSchema]}) 
 room:Array<Document>;

}

export const HotelRoomchema=SchemaFactory.createForClass(HotelRoom);
