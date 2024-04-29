import { Module } from '@nestjs/common';
import { ProgUmrahAirlineService } from './prog_umrah_airline.service';
import { ProgUmrahAirlineController } from './prog_umrah_airline.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgUmrahAirline , ProgUmrahAirlinechema } from './entities/prog_umrah_airline.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgUmrahAirline.name, schema: ProgUmrahAirlinechema }])],
  controllers: [ProgUmrahAirlineController],
  providers: [ProgUmrahAirlineService],
})
export class ProgUmrahAirlineModule {}
