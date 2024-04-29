import { Module } from '@nestjs/common';
import { ProgAlHajHotelService } from './prog_al-haj_hotel.service';
import { ProgAlHajHotelController } from './prog_al-haj_hotel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgAlHajHotel, ProgAlHajHotelchema } from './entities/prog_al-haj_hotel.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgAlHajHotel.name, schema: ProgAlHajHotelchema }])],
  controllers: [ProgAlHajHotelController],
  providers: [ProgAlHajHotelService],
})
export class ProgAlHajHotelModule {}
