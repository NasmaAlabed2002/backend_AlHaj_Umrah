import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, SchemaTypes } from 'mongoose';
import { ProgramUmrah } from 'src/program_umrah/entities/program_umrah.entity';
import { HotelRoom } from 'src/hotel-room/entities/hotel-room.entity';

export type ProgUmrahHotelDocument = HydratedDocument<ProgUmrahHotel>;
@Schema()
export class ProgUmrahHotel {
    @ApiProperty({ example: 1, description: 'id ProgramUmrah' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'ProgramUmrah' }
    ) id_ProgramUmrah: ProgramUmrah;


    @ApiProperty({ example: 2, description: 'id HotelRoom' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'HotelRoom' }
    ) id_HotelRoom: HotelRoom;
}
export const ProgUmrahHotelchema = SchemaFactory.createForClass(ProgUmrahHotel);