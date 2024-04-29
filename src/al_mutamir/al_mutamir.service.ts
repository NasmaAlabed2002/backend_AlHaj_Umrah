import { Injectable } from '@nestjs/common';
import { CreateAlMutamirDto } from './dto/create-al_mutamir.dto';
import { UpdateAlMutamirDto } from './dto/update-al_mutamir.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { AlMutamir } from './entities/al_mutamir.entity';
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
}
