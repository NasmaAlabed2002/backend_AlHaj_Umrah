import { Module } from '@nestjs/common';
import { ProgHajAirlineService } from './prog_haj_airline.service';
import { ProgHajAirlineController } from './prog_haj_airline.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgHajAirline, ProgHajAirlinechema } from './entities/prog_haj_airline.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgHajAirline.name, schema: ProgHajAirlinechema }])],
  controllers: [ProgHajAirlineController],
  providers: [ProgHajAirlineService],
})
export class ProgHajAirlineModule {}
