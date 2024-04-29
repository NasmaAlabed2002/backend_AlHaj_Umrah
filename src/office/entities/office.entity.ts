import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';

export type OfficeDocument = HydratedDocument<Office>;
@Schema()
export class Office {


    @Prop()
    name : string;

    @Prop()
    address : string;

    @Prop()
    mobile : number ;

    @Prop()
    phone : number ;

    @Prop()
    email :  string ;

    @Prop()
    facebook :  string ;

    @Prop()
    telegram :  string ;

    @Prop()
    instagram : string ;

    @Prop()
    whatsApp : number ;
}

export const Officechema=SchemaFactory.createForClass(Office);
