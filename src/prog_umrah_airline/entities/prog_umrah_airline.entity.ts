import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';
import { ProgramUmrah } from 'src/program_umrah/entities/program_umrah.entity';

export type ProgUmrahAirlineDocument = ProgUmrahAirline & Document;
@Schema()
export class ProgUmrahAirline extends Document {
    
  //   @Prop (
  //   { type : SchemaTypes.ObjectId , ref : 'ProgramUmrah' }
  // ) id_ProgramUmrah : ProgramUmrah;

  // @Prop({ type : 'Object' }) 
  // Airline : Array<Document>;

  @Prop ()
   minimumAge : Date;
}
 
  export const ProgUmrahAirlinechema=SchemaFactory.createForClass(ProgUmrahAirline);
