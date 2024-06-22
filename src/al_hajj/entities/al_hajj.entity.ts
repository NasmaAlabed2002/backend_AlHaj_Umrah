import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument , SchemaTypes} from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Url } from 'url';
import { ProgAlHajHotel } from 'src/prog_al-haj_hotel/entities/prog_al-haj_hotel.entity';
import { Types } from 'mongoose';
export type AlHajjDocument = HydratedDocument<AlHajj> & AlHajj & Document;

@Schema()
export class AlHajj {
  @ApiProperty({ example: 1, description: 'id ProgAlHajHotel' })
  @Prop(
      { type: SchemaTypes.ObjectId, ref: 'ProgAlHajHotel' }
  ) id_ProgAlHajHotel: ProgAlHajHotel | null  ;
  @Prop()
  full_name: string | null;
  @Prop()
  name_father: string | null;
  @Prop()
  name_mother: string | null;
  @Prop()
  email: string | null;
  @Prop()
  phone_number:string | null;
  @Prop({ default:()=> Date.now() , required:true })
  birth: Date | null;
  @Prop()
  gender: string | null;
  @Prop()
  Health_status:string | null;
  @Prop(
    {type: SchemaTypes.ObjectId, ref: 'AlHajj' }) 
  companion1: string | Types.ObjectId ;
  @Prop(
    { type: SchemaTypes.ObjectId, ref: 'AlHajj' }) 
  companion2: string | Types.ObjectId ;
  @Prop()
  silat_alqaraba:string | null ;
  @Prop()
  iscompanion:boolean| null;
  @Prop()
  Nationality: string | null;
  @Prop()
  passport_number: string | null;
  @Prop()
  passport_photo :URL | null;
  @Prop()
  alhaj_photo:URL | null ;
  @Prop()
  payment_method:string | null;
  @Prop()
  Verification:boolean | null ;
  @Prop()
  type_room:string | null; 
  @Prop() 
  name_program :string;
}

export const AlHajjchema = SchemaFactory.createForClass(AlHajj);

