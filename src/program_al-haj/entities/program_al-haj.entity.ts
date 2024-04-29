import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType,Document, SchemaTypes } from 'mongoose';
import { Office } from 'src/office/entities/office.entity';
export type ProgramAlHajDocument = HydratedDocument<ProgramAlHaj>;
@Schema()
export class ProgramAlHaj {
    @Prop (
        { type : SchemaTypes.ObjectId , ref : 'Office' }
      ) id_Office : Office;

}

export const ProgramAlHajchema=SchemaFactory.createForClass(ProgramAlHaj);