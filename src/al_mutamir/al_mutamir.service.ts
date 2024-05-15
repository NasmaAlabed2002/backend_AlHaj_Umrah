import { Injectable } from '@nestjs/common';
import { CreateAlMutamirDto } from './dto/create-al_mutamir.dto';
import { UpdateAlMutamirDto } from './dto/update-al_mutamir.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { AlMutamir } from './entities/al_mutamir.entity';
import { ProgUmrahHotel } from 'src/prog_umrah_hotel/entities/prog_umrah_hotel.entity';
import { HotelRoom } from 'src/hotel-room/entities/hotel-room.entity'; 
@Injectable()
export class AlMutamirService {
  constructor(@InjectModel( AlMutamir.name) private  AlMutamirModel: Model< AlMutamir>) {}  
  create(createAlMutamirDto: CreateAlMutamirDto) : Promise< AlMutamir>{
    const createdalMutamir  = new this.AlMutamirModel(createAlMutamirDto)
    return createdalMutamir.save();
    }

  async  findAll() {
    return await this.AlMutamirModel.find();
  }

 async findOne(id: string) {
  return await this.AlMutamirModel.findOne({_id:id});
  }

  async update(id: string, updateAlMutamirDto: UpdateAlMutamirDto) {
    await this.AlMutamirModel.findByIdAndUpdate(id , updateAlMutamirDto , {new : true})
  }

  async remove(id: string) {
    await this.AlMutamirModel.findByIdAndDelete(id);
  }
  async getRoomByNumber(id: string) {
    try {
      const alMutamir = await this.AlMutamirModel.findOne({id})
        .populate({ path: 'id_ProgUmrahHotel', populate: { path: 'id_HotelRoom'  } });
     
        // const alMutamirhote = await this.AlMutamirModel.findOne({ room: { $elemMatch: { number } } })
        // .populate({ path: 'id_ProgUmrahHotel', populate: { path: 'id_HotelRoom' , populate: { path: 'id_hotel' } } });

      if (!alMutamir) {
        throw new Error('AlMutamir not found');
      }

      // const hotelName = alMutamirhote.id_ProgUmrahHotel.id_HotelRoom.id_hotel.name;
      const room = alMutamir.id_ProgUmrahHotel.id_HotelRoom.room[0];
      if (!room) {
        throw new Error('Room not found');
      }
      return { room}
      // return { room, hotelName };
    } catch (error) {
      console.error('Error retrieving room:', error.message);
      throw error;
    }
  }
}
