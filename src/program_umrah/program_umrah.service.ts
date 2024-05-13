import { Injectable } from '@nestjs/common';
import { CreateProgramUmrahDto } from './dto/create-program_umrah.dto';
import { UpdateProgramUmrahDto } from './dto/update-program_umrah.dto';
import { ProgramUmrah } from './entities/program_umrah.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgramUmrahService {
  constructor(@InjectModel( ProgramUmrah.name) private  ProgramUmrahModel: Model< ProgramUmrah>) {}
  async create( createProgramUmrahDto: CreateProgramUmrahDto) : Promise< ProgramUmrah> {
    const createdPRUM = new this.ProgramUmrahModel(createProgramUmrahDto)
    return  createdPRUM.save();
  }

  // async create(name_program: string,  Date_Travel: Date, Date_Travel_Hijri :Date, total_stay:Number , stay_in_macca:Number,  stay_in_madina:Number ,image:URL ,price1: String, price2: String, price3: String,price4: String, ) : Promise< ProgramUmrah> {
  //   const createdPRUM = new this.ProgramUmrahModel({name_program,  Date_Travel , Date_Travel_Hijri, total_stay:Number , stay_in_macca:Number, stay_in_madina:Number , image , price1, price2 , price3, price4})
  //   return  createdPRUM.save();
  // }

  async findAll() {
    return await this.ProgramUmrahModel.find();
  }

  async findOne(id: string) {
    return await this.ProgramUmrahModel.findOne({_id:id})
  }

 async update(id: string, updateProgramUmrahDto: UpdateProgramUmrahDto) {
   await this.ProgramUmrahModel.findByIdAndUpdate(id , updateProgramUmrahDto , {new:true});
  }

  async remove(id: string) {
    await this.ProgramUmrahModel.findByIdAndDelete(id);
  }
}
