import { Module } from '@nestjs/common';
import { ProgUmrahHotelService } from './prog_umrah_hotel.service';
import { ProgUmrahHotelController } from './prog_umrah_hotel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgUmrahHotel, ProgUmrahHotelchema } from './entities/prog_umrah_hotel.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgUmrahHotel.name, schema: ProgUmrahHotelchema }])],
  controllers: [ProgUmrahHotelController],
  providers: [ProgUmrahHotelService],
})
export class ProgUmrahHotelModule {}
