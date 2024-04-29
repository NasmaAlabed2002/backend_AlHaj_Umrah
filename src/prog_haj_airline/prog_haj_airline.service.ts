import { Injectable } from '@nestjs/common';
import { CreateProgHajAirlineDto } from './dto/create-prog_haj_airline.dto';
import { UpdateProgHajAirlineDto } from './dto/update-prog_haj_airline.dto';
import { ProgHajAirline } from './entities/prog_haj_airline.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProgHajAirlineService {
  constructor(@InjectModel( ProgHajAirline.name) private  ProgHajAirlineModel: Model< ProgHajAirline>) {}
 async create(createProgHajAirlineDto: CreateProgHajAirlineDto): Promise<ProgHajAirline> {
  const createdPHA= new this.ProgHajAirlineModel(createProgHajAirlineDto);
  return createdPHA.save();
  }

 async findAll() {
    return await this.ProgHajAirlineModel.find();
  }

 async findOne(id: string) {
    return await this.ProgHajAirlineModel.findOne({_id:id})
  }

  async update(id: string, updateProgHajAirlineDto: UpdateProgHajAirlineDto) {
  await this.ProgHajAirlineModel.findByIdAndUpdate(id , updateProgHajAirlineDto , {new : true})
  }

  async remove(id: string) {
    await this.ProgHajAirlineModel.findByIdAndDelete(id);
  }
}
