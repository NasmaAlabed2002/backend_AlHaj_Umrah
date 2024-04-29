import { Injectable } from '@nestjs/common';
import { CreateProgAlHajHotelDto } from './dto/create-prog_al-haj_hotel.dto';
import { UpdateProgAlHajHotelDto } from './dto/update-prog_al-haj_hotel.dto';
import { ProgAlHajHotel } from './entities/prog_al-haj_hotel.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgAlHajHotelService {
  constructor(@InjectModel(ProgAlHajHotel.name) private ProgAlHajHotelModel: Model<ProgAlHajHotel>) { }
  async create(createProgAlHajHotelDto: CreateProgAlHajHotelDto): Promise<ProgAlHajHotel> {
    const createdoPUmrHotel = new this.ProgAlHajHotelModel(createProgAlHajHotelDto)
    return createdoPUmrHotel.save();
  }

  async findAll() {
    return await this.ProgAlHajHotelModel.find();
  }

  async findOne(id: string) {
    return await this.ProgAlHajHotelModel.findOne({ _id: id });
  }
  async update(id: string, updateProgAlHajHotelDto: UpdateProgAlHajHotelDto) {
    await this.ProgAlHajHotelModel.findByIdAndUpdate(id, updateProgAlHajHotelDto, { new: true });
  }

  async remove(id: string) {
    await this.ProgAlHajHotelModel.findByIdAndDelete(id);
  }
}
