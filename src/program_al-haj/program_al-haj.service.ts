import { Injectable } from '@nestjs/common';
import { CreateProgramAlHajDto } from './dto/create-program_al-haj.dto';
import { UpdateProgramAlHajDto } from './dto/update-program_al-haj.dto';
import { ProgramAlHaj } from './entities/program_al-haj.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class ProgramAlHajService {
  constructor(@InjectModel(ProgramAlHaj.name) private ProgramAlHajModel: Model<ProgramAlHaj>) { }
  async create(createProgramAlHajDto: CreateProgramAlHajDto): Promise<ProgramAlHaj> {
    const createdProgalH = new this.ProgramAlHajModel(createProgramAlHajDto)
    return createdProgalH.save();
  }

  async findAll() {
    return await this.ProgramAlHajModel.find();
  }

  async findOne(id: string) {
    return await this.ProgramAlHajModel.find({ _id: id });
  }

  async update(id: string, updateProgramAlHajDto: UpdateProgramAlHajDto) {
     await this.ProgramAlHajModel.findByIdAndUpdate(id , updateProgramAlHajDto , {new : true});
  }

  async remove(id: string ) {
    await this.ProgramAlHajModel.findByIdAndDelete(id);
  }
}
