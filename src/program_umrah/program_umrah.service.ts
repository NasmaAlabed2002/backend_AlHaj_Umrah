import { Injectable } from '@nestjs/common';
import { CreateProgramUmrahDto } from './dto/create-program_umrah.dto';
import { UpdateProgramUmrahDto } from './dto/update-program_umrah.dto';
import { ProgramUmrah } from './entities/program_umrah.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgramUmrahService {
  constructor(@InjectModel( ProgramUmrah.name) private  ProgramUmrahModel: Model< ProgramUmrah>) {}
  async create(name_program: string, type_programUmrah:string, Date_Travel: Date, total_stay:Number , stay_in_macca:Number, stay_in_madina:Number) : Promise< ProgramUmrah> {
    const createdPRUM = new this.ProgramUmrahModel({name_program, type_programUmrah, Date_Travel, total_stay , stay_in_macca, stay_in_madina })
    return  createdPRUM.save();
  }

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
