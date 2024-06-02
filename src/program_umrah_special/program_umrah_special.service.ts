import { Injectable } from '@nestjs/common';
import { CreateProgramUmrahSpecialDto } from './dto/create-program_umrah_special.dto';
import { UpdateProgramUmrahSpecialDto } from './dto/update-program_umrah_special.dto';
import { ProgramUmrahSpecial } from './entities/program_umrah_special.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgramUmrahSpecialService {
  constructor(@InjectModel( ProgramUmrahSpecial.name) private  ProgramUmrahSpecialModel: Model< ProgramUmrahSpecial>) {}
  async create(createProgramUmrahSpecialDto : CreateProgramUmrahSpecialDto) : Promise< ProgramUmrahSpecial> {
    const createdPRUM = new this.ProgramUmrahSpecialModel(createProgramUmrahSpecialDto)
    return  createdPRUM.save();
  }

  async findAll() {
    return await this.ProgramUmrahSpecialModel.find();
  }

  async findOne(id: string) {
    return await this.ProgramUmrahSpecialModel.findOne({_id:id})
  }

 async update(id: string, updateProgramUmrahSpecialDto: UpdateProgramUmrahSpecialDto) {
   await this.ProgramUmrahSpecialModel.findByIdAndUpdate(id , updateProgramUmrahSpecialDto , {new:true});
  }

  async remove(id: string) {
    await this.ProgramUmrahSpecialModel.findByIdAndDelete(id);
  }
}
