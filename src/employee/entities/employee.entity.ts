import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';
import { Office } from 'src/office/entities/office.entity';
import { ApiProperty } from '@nestjs/swagger';

export type EmployeeDocument = HydratedDocument<Employee>;
@Schema()
export class Employee {

    @ApiProperty({ example: 1, description: 'id office' })
    @Prop (
        { type : SchemaTypes.ObjectId , ref : 'Office' }
      ) id_office : Office;

    @Prop()
    firstname:string;
    @Prop()
    lastname:string;
    @Prop()
    birth:Date;
    @Prop()
    specialty:string;
    @Prop()
    mobile:number;
    @Prop()
    email:string ;
    @Prop()
    Educational_attainment:string;
    @Prop()
    adress:string;
    @Prop()
    dateEmployee:Date;
}
export const Employeechema = SchemaFactory.createForClass(Employee);
