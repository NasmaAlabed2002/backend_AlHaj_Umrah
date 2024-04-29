import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';
import { ProgramAlHaj } from 'src/program_al-haj/entities/program_al-haj.entity';

export type ProgHajAirlineDocument = ProgHajAirline & Document;
@Schema({versionKey:false})
export class ProgHajAirline extends Document {
    @Prop (
        { type : SchemaTypes.ObjectId , ref : 'ProgramAlHaj' }
      ) id_ProgramAlHaj : ProgramAlHaj;

      @Prop({ type : 'Object' }) 
      Airline : Array<Document>;
}
export const ProgHajAirlinechema=SchemaFactory.createForClass(ProgHajAirline);