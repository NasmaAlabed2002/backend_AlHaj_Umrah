import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaType, Document, SchemaTypes } from 'mongoose';
import { ProgramUmrah } from 'src/program_umrah/entities/program_umrah.entity';
import { busCompanySchema, busCompany } from './bus-company.schema';
import {Seat, SeatSchema } from './seat.schema';

export type ProgramBusDocument = ProgramBus & Document;
@Schema({ versionKey: false })

export class ProgramBus extends Document {
  @ApiProperty({ example: 1, description: 'id ProgramUmrah' })
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'ProgramUmrah' }
  ) id_ProgramUmrah: ProgramUmrah;

  // @ApiProperty({ example: 1, description: 'id busCompany' })
  // @Prop(
  //   { type: SchemaTypes.ObjectId, ref: 'busCompany' }
  // ) id_busCompany: busCompany;

  
  @Prop({ type :[SeatSchema]}) 
  seat: [{
    number_bus: number;
    seatNumber: Number,
    name_passenger: String,
    isReserved: boolean
  }]


// Array<Document>;
      // @Prop({ type: [{ type: SchemaTypes.ObjectId , ref: 'busCompany' }] })
      // busCompany: busCompany[];
      
}
export const ProgramBuschema = SchemaFactory.createForClass(ProgramBus);


// name_company: string;

// @Prop()
// type_bus: string;

// @Prop()
// price_tecket: string;

// @Prop()
// number_bus: number;

// // @Prop({ type: [{ type: SchemaTypes.ObjectId , ref: 'Seat' }] })
// // seat: Seat[];

// @Prop({ type: [SeatSchema] })
// seat: [{
//   seatNumber: Number,
//   name_passenger: String,
//   isReserved: boolean
// }]