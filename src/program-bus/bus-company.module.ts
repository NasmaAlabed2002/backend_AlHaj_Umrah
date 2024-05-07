import { Module } from '@nestjs/common';
import { ProgramBusService } from './program-bus.service';
import { busCompany , busCompanySchema } from './entities/bus-company.schema';
import { Seat , SeatSchema } from './entities/seat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BusCompanyController } from './bus-company.controller';
import { BusCompanyService } from './bus-company.service';

@Module({
  imports: 
  [
    MongooseModule.forFeature([
      { name: busCompany.name , schema: busCompanySchema },
      { name: Seat.name , schema: SeatSchema },
    ]),
  ],
//   [MongooseModule.forFeatureAsync([
//     { name: ProgramBus.name , 
//     useFactory: () => 
//     { 
//      const schema = ProgramBuschema;
//      return schema;
//     } 
//   }  
// ])],
  controllers: [ BusCompanyController],

  providers: [BusCompanyService],
})
export class BusCompanyModule {}