
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
// export type HotelDocument = HydratedDocument<Hotel>;
export type HotelDocument = Hotel & Document;
@Schema({ versionKey: false })


export class Hotel extends Document {
  @Prop()
  name: string;

  @Prop()
  Number_stars: number;

  @Prop()
  location: string;

  @Prop()
  details: string;

  @Prop()
  urlImagehotel:URL;

  @Prop()
  urlImage: Array<string>;


  @Prop()
  Services: Array<string>;


  @Prop()
  Places_available_visit:Array<string>;


  @Prop()
  link:URL;
}

export const Hotelchema = SchemaFactory.createForClass(Hotel);