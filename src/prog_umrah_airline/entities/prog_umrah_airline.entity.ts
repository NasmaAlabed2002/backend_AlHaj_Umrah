import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';
import { ProgramUmrah } from 'src/program_umrah/entities/program_umrah.entity';

export type ProgUmrahAirlineDocument = ProgUmrahAirline & Document;
@Schema({versionKey:false})
export class ProgUmrahAirline extends Document {
    
    @Prop (
    { type : SchemaTypes.ObjectId , ref : 'ProgramUmrah' }
  ) id_ProgramUmrah : ProgramUmrah;

  @Prop({ type : 'Object' }) 
  Airline : Array<Document>;}
  
  export const ProgUmrahAirlinechema=SchemaFactory.createForClass(ProgUmrahAirline);
