import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument , SchemaTypes} from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Url } from 'url';
import { ProgAlHajHotel } from 'src/prog_al-haj_hotel/entities/prog_al-haj_hotel.entity';

export type AlHajjDocument = HydratedDocument<AlHajj>
@Schema()
export class AlHajj {
  @ApiProperty({ example: 1, description: 'id ProgAlHajHotel' })
  @Prop(
      { type: SchemaTypes.ObjectId, ref: 'ProgAlHajHotel' }
  ) id_ProgAlHajHotel: ProgAlHajHotel | null  ;
  @Prop()
  full_name: string;
  @Prop()
  name_father: string;
  @Prop()
  name_mother: string;
  @Prop()
  email: string;
  @Prop()
  phone_number:string;
  @Prop({ default:()=> Date.now() , required:true })
  birth: Date;
  @Prop()
  gender: string;
  @Prop()
  Health_status:string;
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'AlHajj' }) 
  companion1:AlHajj | null ;
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'AlHajj' }) 
  companion2:AlHajj | null ;
  @Prop()
  silat_alqaraba:string;
  @Prop()
  iscompanion:boolean;
  @Prop()
  Nationality: string;
  @Prop()
  passport_number: string;
  @Prop()
  passport_photo :URL;
  @Prop()
  alhaj_photo:URL;
  @Prop()
  payment_method:string;
  @Prop()
  Verification:boolean;
  @Prop()
  visa_photo:URL;
}

export const AlHajjchema = SchemaFactory.createForClass(AlHajj);

