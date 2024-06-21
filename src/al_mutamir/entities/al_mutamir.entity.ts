import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument ,SchemaTypes } from 'mongoose';
import { URL } from 'url';
import { ProgramBus } from 'src/program-bus/entities/program-bus.entity';
import { ProgUmrahHotel } from 'src/prog_umrah_hotel/entities/prog_umrah_hotel.entity';
import { ProgramUmrahSpecial } from 'src/program_umrah_special/entities/program_umrah_special.entity';
export type AlMutamirDocument = HydratedDocument<AlMutamir>
@Schema()
export class AlMutamir {

    @ApiProperty({ example: 1, description: 'id ProgramUmrahSpecial' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'ProgramUmrahSpecial' }
    ) id_ProgramUmrahSpecial: ProgramUmrahSpecial;

    @ApiProperty({ example: 1, description: 'id ProgramBus' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'id ProgramBus' }
    ) id_programBus: ProgramBus;

    @ApiProperty({ example: 2, description: 'id ProgUmrahHotel' })
    @Prop(
        { type: SchemaTypes.ObjectId, ref: 'id ProgUmrahHotel' }
    ) id_ProgUmrahHotel: ProgUmrahHotel;
    @Prop()
    full_name: string;
    @Prop()
    name_father: string;
    @Prop()
    name_mother: string;
    @Prop()
    phone_number:Number;
    @Prop()
    email: string
    @Prop({ default:()=> Date.now() ,required:true })
    birth: Date;
    @Prop()
    gender: string;
    @Prop()
    Nationality: string;
    @Prop()
    passport_number: string;
    @Prop()
    passport_photo: URL;
    @Prop()
    almutamir_photo: URL;
    @Prop()
    number_bus:Number;
    @Prop()
    type_room:string
    @Prop()
    seatNumber:Number;
    @Prop()
    payment_method:string;
    @Prop()
    Verification:Boolean;
}
export const AlMutamirchema = SchemaFactory.createForClass(AlMutamir);