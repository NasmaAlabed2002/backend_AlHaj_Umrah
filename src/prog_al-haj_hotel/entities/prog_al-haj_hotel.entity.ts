import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, SchemaTypes } from 'mongoose';
import { ProgramAlHaj } from 'src/program_al-haj/entities/program_al-haj.entity';
import { HotelRoom } from 'src/hotel-room/entities/hotel-room.entity';

export type ProgramHotelDocument = HydratedDocument<ProgAlHajHotel>;
@Schema()
export class ProgAlHajHotel {
    @ApiProperty({ example: 1, description: 'id ProgramAlHaj' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'id ProgramAlHaj' }
    ) id_ProgramAlHaj: ProgramAlHaj;


    @ApiProperty({ example: 2, description: 'id HotelRoom' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'id HotelRoom' }
    ) id_HotelRoom: HotelRoom;
}
export const ProgAlHajHotelchema = SchemaFactory.createForClass(ProgAlHajHotel);