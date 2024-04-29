import { Injectable } from '@nestjs/common';
import { CreateProgUmrahHotelDto } from './dto/create-prog_umrah_hotel.dto';
import { UpdateProgUmrahHotelDto } from './dto/update-prog_umrah_hotel.dto';
import { ProgUmrahHotel } from './entities/prog_umrah_hotel.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgUmrahHotelService {
  constructor(@InjectModel( ProgUmrahHotel.name) private  ProgUmrahHotelModel: Model< ProgUmrahHotel>) {}
 async create(createProgUmrahHotelDto: CreateProgUmrahHotelDto): Promise< ProgUmrahHotel>  {
  const createdPUMHOTEL  = new this.ProgUmrahHotelModel(createProgUmrahHotelDto) 
  return createdPUMHOTEL.save();
  }

 async findAll() {
    return await this.ProgUmrahHotelModel.find();
  }

  async findOne(id: string) {
    return await this.ProgUmrahHotelModel.findOne({_id:id})
  }

  async update(id: string , updateProgUmrahHotelDto: UpdateProgUmrahHotelDto) {
    await this.ProgUmrahHotelModel.findByIdAndUpdate(id , updateProgUmrahHotelDto , {new:true})
  }

 async remove(id: string) {
   await this.ProgUmrahHotelModel.findByIdAndDelete(id);
  }
}
