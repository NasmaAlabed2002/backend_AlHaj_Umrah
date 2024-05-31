import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Double } from 'mongodb';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';
import { Office } from 'src/office/entities/office.entity';
export type ProgramAlHajDocument = HydratedDocument<ProgramAlHaj>;
@Schema()
export class ProgramAlHaj {
    @Prop (
        { type : SchemaTypes.ObjectId , ref : 'Office' }
      ) id_Office : Office;
      @Prop({ type : 'Object' }) 
      Airline : {name:string, price_tecket:Double }
      @Prop()
      name_program: string;
      @Prop()
      Date_Travel: Date;
      @Prop()
      Date_Travel_Hijri :string;
      @Prop()
      total_stay: Number;
      @Prop()
      stay_in_macca: Number;
      @Prop()
      stay_in_madina: Number;
      @Prop()
      type_hotel:string;
      @Prop()
      Religious_guide:string;
      @Prop()
      Number_meals:string;
      @Prop()
      image:URL;
      @Prop()
      price1: String;
      @Prop()
      price2: string;
      @Prop()
      price3: string;
      @Prop()
      price4: string;
      
    
}

export const ProgramAlHajchema=SchemaFactory.createForClass(ProgramAlHaj);