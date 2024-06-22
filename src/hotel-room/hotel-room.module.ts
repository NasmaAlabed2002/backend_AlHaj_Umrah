import { Module } from '@nestjs/common';
import { HotelRoomService } from './hotel-room.service';
import { HotelRoomController } from './hotel-room.controller';
import { HotelRoom, HotelRoomchema } from './entities/hotel-room.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel , Hotelchema } from 'src/hotel/entities/hotel.entity';
@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: HotelRoom.name,
    useFactory: () => {
      const schema = HotelRoomchema;
      return schema;
    } }    ,  {  name: Hotel.name  , useFactory: () => {
      const schema = Hotelchema;
      return schema;
    } }
  ])],
  controllers: [HotelRoomController],
  providers: [HotelRoomService],
})
export class HotelRoomModule { }
