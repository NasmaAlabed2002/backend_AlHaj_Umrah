import { Module } from '@nestjs/common';
import { ProgramBusService } from './program-bus.service';
import { ProgramBusController } from './program-bus.controller';
import { ProgramBus , ProgramBuschema } from './entities/program-bus.entity';
import { ProgramUmrah, ProgramUmrahchema } from 'src/program_umrah/entities/program_umrah.entity';
import { busCompany , busCompanySchema } from './entities/bus-company.schema';
import { Seat , SeatSchema } from './entities/seat.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: 
  [
    MongooseModule.forFeature([
      { name:  ProgramBus.name, schema: ProgramBuschema },
      { name: ProgramUmrah.name, schema: ProgramUmrahchema },
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
  controllers: [ProgramBusController],
  providers: [ProgramBusService],
})
export class ProgramBusModule {}
