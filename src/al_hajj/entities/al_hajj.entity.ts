import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlHajjDocument = HydratedDocument<AlHajj>
@Schema()
export class AlHajj {

  @Prop()
  name: string;
  @Prop()
  name_father: string;
  @Prop()
  name_mother: string;
  @Prop()
  birth: Date;
  @Prop()
  gender: string;
  @Prop()
  Nationality: string;
  @Prop()
  passport_number: string;

  @Prop({ required: true })
  nationalNumber: string;
  @Prop()
  nationalNumbercomp: string;
  @Prop()
  companionId: string;

  @Prop()
  email: string;

  // @Prop()
  // passport_photo : GridFSBucket;
  // @Prop()
  // Accept : boolean;
  // @Prop()
  // visa :  object;

}

export const AlHajjchema = SchemaFactory.createForClass(AlHajj);
