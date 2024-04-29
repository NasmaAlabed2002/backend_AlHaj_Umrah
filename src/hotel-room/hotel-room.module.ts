import { Module } from '@nestjs/common';
import { HotelRoomService } from './hotel-room.service';
import { HotelRoomController } from './hotel-room.controller';
import { HotelRoom, HotelRoomchema } from './entities/hotel-room.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: HotelRoom.name,
    useFactory: () => {
      const schema = HotelRoomchema;
      return schema;
    } }
  ])],
  controllers: [HotelRoomController],
  providers: [HotelRoomService],
})
export class HotelRoomModule { }
