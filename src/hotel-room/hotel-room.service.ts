import { Injectable } from '@nestjs/common';
import { CreateHotelRoomDto } from './dto/create-hotel-room.dto';
import { UpdateHotelRoomDto } from './dto/update-hotel-room.dto';
import { HotelRoom } from './entities/hotel-room.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HotelRoomService {
  constructor(@InjectModel(HotelRoom.name) private HotelRoomModel: Model<HotelRoom>) {}
 async create(createHotelRoomDto: CreateHotelRoomDto) {
    const createdHotelRoom = new this.HotelRoomModel(createHotelRoomDto);
    return createdHotelRoom.save();
  }

   async findAll() {
    return await this.HotelRoomModel.find();
  }

  async findOne(id: string) {
    return await this.HotelRoomModel.findOne({_id:id});
  }

  async update(id: string, updateHotelRoomDto: UpdateHotelRoomDto) {
   await this.HotelRoomModel.findByIdAndUpdate( id , updateHotelRoomDto , {new : true });
  }

  async remove(id: string) {
    await this.HotelRoomModel.findByIdAndDelete(id);
  }
}
