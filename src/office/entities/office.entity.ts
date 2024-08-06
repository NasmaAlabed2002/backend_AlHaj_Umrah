import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';

export type OfficeDocument = HydratedDocument<Office>;
@Schema()
export class Office {


    @Prop()
    name : string;
    @Prop()
    nameEnglish :string;
    @Prop()
    logoImage:URL;
    @Prop()
    aboutOffice: string;
    @Prop()
    address : string;
    @Prop()
    password : string;
    @Prop()
    mobile : string ;

    @Prop()
    phone : string ;

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
