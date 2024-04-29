import { Injectable } from '@nestjs/common';
import { CreateProgUmrahAirlineDto } from './dto/create-prog_umrah_airline.dto';
import { UpdateProgUmrahAirlineDto } from './dto/update-prog_umrah_airline.dto';
import { ProgUmrahAirline } from './entities/prog_umrah_airline.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgUmrahAirlineService {
  constructor(@InjectModel( ProgUmrahAirline.name) private  ProgUmrahAirlineModel: Model< ProgUmrahAirline>) {}
  async create(createProgUmrahAirlineDto: CreateProgUmrahAirlineDto) : Promise<ProgUmrahAirline> {
    const createdprogUA= new this.ProgUmrahAirlineModel(createProgUmrahAirlineDto);
    return createdprogUA.save();
  }

  async findAll() {
    return  await this.ProgUmrahAirlineModel.find();
  }

 async findOne(id: string) {
    return await this.ProgUmrahAirlineModel.findOne({_id:id});
  }

  async update(id: string , updateProgUmrahAirlineDto: UpdateProgUmrahAirlineDto) {
    await this.ProgUmrahAirlineModel.findByIdAndUpdate(id , updateProgUmrahAirlineDto , {new : true});
  }

  async remove(id: string ) {
  await this.ProgUmrahAirlineModel.findByIdAndDelete(id);
  }
}
